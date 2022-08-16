import 'reflect-metadata';
import { bootstrapMicroframework } from 'microframework';
import { expressLoader } from './loaders/express.loader';
import { iocLoader } from './loaders/ioc.loader';
import { winstonLoader } from './loaders/winston.loader';
import { banner } from './library/banner';
import { Logger } from './library/logger';

const log = new Logger(__filename);

bootstrapMicroframework({
    loaders: [iocLoader, expressLoader, winstonLoader],
})
    .then(() => {
        banner(log);
    })
    .catch((error) => log.error('Application is crashed: ' + error + error.stack));
