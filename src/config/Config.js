"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DATA_PATH = (_a = process.env.DATA_PATH) !== null && _a !== void 0 ? _a : 'db/data.json';
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;
exports.config = {
    db: {
        file_path: DATA_PATH
    },
    server: {
        port: SERVER_PORT
    },
};
