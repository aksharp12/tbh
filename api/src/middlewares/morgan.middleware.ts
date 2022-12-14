import * as express from 'express';
import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';
import { Logger } from '../library/logger';

@Middleware({ type: 'before' })
@Service()
export class LogMiddleware implements ExpressMiddlewareInterface {
    private log = new Logger(__dirname);

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return morgan('short', {
            stream: {
                write: this.log.info.bind(this.log),
            },
        })(req, res, next);
    }
}
