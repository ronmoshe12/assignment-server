import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

import { config } from './src/config';
import Logging from './src/common/helpers/Logging';
import { API_PATH_VERSION } from './src/common/constants';
import cors from 'cors';
import { CarsRouter } from './src/routers';

//For env File 

const StartServer = () => {

    dotenv.config();

    const app: Application = express();
    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        Logging.info(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /** Enable CORS */
    app.use(cors());

    /** Routes */
    app.use(API_PATH_VERSION + '/cars', CarsRouter);
    /** Health check */
    app.get(API_PATH_VERSION + '/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Route Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    app.listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};

StartServer();


// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome to Express & TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`Server is Fire at http://localhost:${port}`);
// });