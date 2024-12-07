import '@/bootstrap/axios.config.ts';

import helmet from 'helmet';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { buildGqlSchema } from '@/schema';
import { corsPlugin } from '@/plugins/cors';
import { initFactories } from '@/plugins/initFactories';

export const getApp = async () => {
    await initFactories();

    const app = express();

    app.use(
        corsPlugin,
        helmet({
            contentSecurityPolicy: {
                directives: {
                    'frame-ancestors': ["'self'"]
                }
            }
        })
    );

    const schema = await buildGqlSchema();
    const apolloServer = new ApolloServer({
        schema
    });

    await apolloServer.start();

    app.use(express.json(), expressMiddleware(apolloServer));

    return app;
};
