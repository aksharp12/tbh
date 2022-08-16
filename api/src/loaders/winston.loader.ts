import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { configure, format, transports } from 'winston';
import env from '../config';

export const winstonLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    configure({
        transports: [
            new transports.Console({
                level: env.logLevel,
                handleExceptions: true,
                format: format.combine(format.colorize(), format.simple()),
            }),
        ],
    });
};
