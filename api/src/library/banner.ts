import env from '../config';
import { Logger } from '../library/logger';

export function banner(log: Logger): void {
    log.info(``);
    log.info(`App is ready on ${env.routePrefix}`);
    log.info(`To shut it down, press <CTRL> + C at any time.`);
    log.info(``);
    log.info('-------------------------------------------------------');
    log.info(`Environment  : ${env.env}`);
    log.info(``);
    log.info(`Port : ${env.port}`);
    log.info(``);
    log.info(`API Info     : ${env.routePrefix}`);
    log.info('-------------------------------------------------------');
    log.info(``);
}
