"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./src/config");
const Logging_1 = __importDefault(require("./src/common/helpers/Logging"));
const constants_1 = require("./src/common/constants");
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./src/routers");
//For env File 
const StartServer = () => {
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        Logging_1.default.info(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            /** Log the res */
            Logging_1.default.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    /** Enable CORS */
    app.use((0, cors_1.default)());
    /** Routes */
    app.use(constants_1.API_PATH_VERSION + '/cars', routers_1.CarsRouter);
    /** Health check */
    app.get(constants_1.API_PATH_VERSION + '/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));
    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Route Not found');
        Logging_1.default.error(error);
        res.status(404).json({
            message: error.message
        });
    });
    app.listen(config_1.config.server.port, () => Logging_1.default.info(`Server is running on port ${config_1.config.server.port}`));
};
StartServer();
// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome to Express & TypeScript Server');
// });
// app.listen(port, () => {
//   console.log(`Server is Fire at http://localhost:${port}`);
// });
