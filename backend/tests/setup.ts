import 'reflect-metadata';

import request from 'supertest';

import { getApp } from '@/index';
import { shutdown } from '@/plugins/shutdown';

beforeAll(async () => {
    const app = await getApp();

    global.request = request(app);
});

afterAll(async () => {
    await shutdown();
});
