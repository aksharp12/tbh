import dotenv from 'dotenv';

const envFile = dotenv.config();
if (envFile.error) throw new Error('.env file not found');

process.env.NODE_ENV = process.env.NODE_ENV || 'local';

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    routePrefix: process.env.ROUTE_PREFIX,
    logLevel: process.env.LOG_LEVEL,
    controllers: 'src/api/**/*controller.ts',
    middlewares: 'src/middlewares/**/*middleware.ts',
};
