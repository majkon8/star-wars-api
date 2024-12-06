import { promisify } from 'util';

import type { RedisScripts, RedisModules, RedisFunctions, RedisClientType } from 'redis';

export class RedisManager<IRedis extends Record<string, unknown>> {
    constructor(
        private readonly redis: RedisClientType<RedisModules, RedisFunctions, RedisScripts>,
        private readonly isEnabled = true,
        private readonly keyExpiresInMinutes = 0
    ) {}

    private _get = promisify(this.redis.get);
    private _set = promisify(this.redis.set);
    private _setEx = promisify(this.redis.setEx);
    private _del = promisify(this.redis.del);
    private _exists = promisify(this.redis.exists);
    private _scan = promisify(this.redis.scan);

    async get<T extends keyof IRedis>(key: T | null = null) {
        if (!key || !this.isEnabled) {
            return null;
        }

        const result = await this._get(key);

        if (!result) {
            return null;
        }

        return JSON.parse(result) as IRedis[T];
    }

    async set<T extends keyof IRedis>(key: T, value: IRedis[T], expiresInMinutes = this.keyExpiresInMinutes) {
        if (!this.isEnabled) {
            return;
        }

        const jsonValue = JSON.stringify(value);

        if (expiresInMinutes) {
            await this._setEx(key, expiresInMinutes * 60, jsonValue);
        } else {
            await this._set(key, jsonValue);
        }
    }

    async forget(key: keyof IRedis) {
        if (!this.isEnabled) {
            return;
        }

        await this._del(key);
    }

    async exists(key: string): Promise<boolean> {
        if (!this.isEnabled) {
            return new Promise(resolve => resolve(false));
        }

        const exists = await this._exists(key);

        return !!exists;
    }

    private async _eachScan(pattern: string) {
        const keys: Array<keyof IRedis> = [];
        let cursor = '';

        while (cursor !== '0') {
            const scanResults = await this._scan(cursor || 0, 'MATCH', pattern);

            const [newCursor, matchingKeys] = scanResults;

            cursor = newCursor;
            keys.push(...matchingKeys);
        }

        return keys;
    }

    async runActionOnKeyPattern(pattern: string, callback: (matchingKeys: Array<keyof IRedis>) => Promise<void>) {
        const keys = await this._eachScan(pattern);

        await callback(keys);
    }

    forgetByPattern(pattern: string) {
        if (!this.isEnabled) {
            return;
        }

        return this.runActionOnKeyPattern(pattern, async keys => {
            for (const key of keys) {
                await this.forget(key);
            }
        });
    }
}
