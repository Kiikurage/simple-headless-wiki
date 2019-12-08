import * as express from 'express';
import { App } from '../app';
import { Adapter } from './Adapter';

export class ExpressjsAdapter implements Adapter {
    constructor(app: App) {

    }

    handler(): express.Handler {
        return (req: express.Request, res: express.Response) => {
            res.send('ExpressjsAdapter: OK');
        };
    }
}
