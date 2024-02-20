import dotenv from 'dotenv';

dotenv.config();
const DATA_PATH = process.env.DATA_PATH ?? 'db/data.json';
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;

export const config = {
    db: {
        file_path: DATA_PATH
    },
    server: {
        port: SERVER_PORT
    },

};
