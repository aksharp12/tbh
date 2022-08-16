import { Application } from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { createExpressServer } from 'routing-controllers';
import env from '../config';
import { getPaths } from '../library/env';

export const expressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const expressApp: Application = createExpressServer({
            cors: {
                origin: ['http://localhost:4200', '*'],
                allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
            },
            classTransformer: true,
            routePrefix: env.routePrefix,
            defaultErrorHandler: false,
            controllers: getPaths([env.controllers]),
            middlewares: getPaths([env.middlewares]),
        });

        const server = expressApp.listen(env.port);
        settings.setData('express_server', server);
    }
};
