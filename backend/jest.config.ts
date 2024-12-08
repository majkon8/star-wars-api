import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./tests/setup.ts'],
    globalSetup: './tests/bootstrap.ts',
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '@tests/(.*)': '<rootDir>/tests/$1'
    },
    transform: {
        '^.+\\.ts?$': ['ts-jest', { isolatedModules: true }]
    },
    workerIdleMemoryLimit: 0.7
};

export default config;
