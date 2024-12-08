import 'reflect-metadata';
import 'module-alias/register';

import { register } from 'ts-node';

import { shutdown } from '@/plugins/shutdown';
import { initFactories } from '@/plugins/initFactories';

register({ transpileOnly: true });

export default async () => {
    await initFactories();

    await shutdown();
};
