import express, { Application, Request, Response, NextFunction, response } from 'express';

import routes from './routes/index'

export default function createServer() {
    const app: Application = express();

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send("Team healh-check. V0.0.1");
    });

    app.use(routes);

    return app;
}