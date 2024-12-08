import axios from 'axios';
import { Inject, Service } from 'typedi';

import { RedisManager } from '@/services/redis/RedisManager';

import type { ICacheRedis } from '@/types/redis';
import type { Resource } from '@/enums/resources';
import type Person from '@/schema/typeDefs/Person';

@Service()
export class DataService {
    constructor(
        @Inject('cacheManager')
        private readonly cacheManager: RedisManager<ICacheRedis>
    ) {}

    async getAll(resource: Resource, page?: number) {
        const endpoint = `/${resource}/?page=${page}`;
        const cacheKey = endpoint as keyof ICacheRedis;

        if (await this.cacheManager.exists(cacheKey)) {
            const results = await this.cacheManager.get(cacheKey);

            return results;
        }

        const {
            data: { results }
        } = await axios.get(endpoint);

        await this.cacheManager.set(cacheKey, results);

        return results;
    }

    async getOne(resource: Resource, id: number) {
        const cacheKey = `/${resource}/${id}` as keyof ICacheRedis;

        if (await this.cacheManager.exists(cacheKey)) {
            const data = await this.cacheManager.get(cacheKey);

            return data;
        }

        const { data } = await axios.get(`/${resource}/${id}`);

        await this.cacheManager.set(cacheKey, data);

        return data;
    }

    async getAdditionalData(urls: string[], resource: Resource) {
        if (!urls) {
            return;
        }

        const ids = urls.map(characterUrl => {
            const urlParts = characterUrl.split('/');
            const id = urlParts.pop() || urlParts.pop();

            return id;
        }) as string[];

        if (!ids.length) {
            return [];
        }

        const additionalData = await this.getMany(resource, ids);

        return additionalData;
    }

    private async getMany(resource: Resource, ids: string[]): Promise<Person[]> {
        const requests = ids.map(id => this.getOne(resource, +id));

        const data = await Promise.all(requests);

        return data;
    }
}
