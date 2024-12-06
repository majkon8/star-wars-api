import helmet from 'helmet';
import express, { Express } from 'express';

import { initFactories } from '@/plugins/initFactories';

export const getApp = async () => {
    await initFactories();

    const app: Express = express();

    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    'frame-ancestors': ["'self'"]
                }
            }
        })
    );

    return app;
};
