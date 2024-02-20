"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCarFromJSON = exports.updateCarInJSON = exports.addNewCarToJSON = exports.readJSONFile = void 0;
const fs = __importStar(require("fs"));
const Logging_1 = __importDefault(require("./Logging"));
const readJSONFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging_1.default.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            }
            else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging_1.default.success(`Successfully to Fetched Data from path ${filePath}`);
                    resolve(jsonData);
                }
                catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};
exports.readJSONFile = readJSONFile;
const addNewCarToJSON = (filePath, newCarData) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging_1.default.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            }
            else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging_1.default.success(`Successfully to Fetched Data from path ${filePath}`);
                    newCarData = Object.assign({ id: generateUUID() }, newCarData);
                    jsonData.push(newCarData);
                    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), () => {
                        resolve(jsonData);
                    });
                }
                catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
});
exports.addNewCarToJSON = addNewCarToJSON;
const updateCarInJSON = (filePath, newCarData) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging_1.default.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            }
            else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging_1.default.success(`Successfully to Fetched Data from path ${filePath}`);
                    const updatedJsonData = jsonData.filter((car) => car.id !== newCarData.id);
                    updatedJsonData.push(newCarData);
                    fs.writeFile(filePath, JSON.stringify(updatedJsonData, null, 2), () => {
                        resolve(updatedJsonData);
                    });
                }
                catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
});
exports.updateCarInJSON = updateCarInJSON;
const deleteCarFromJSON = (filePath, id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging_1.default.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            }
            else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging_1.default.success(`Successfully to Fetched Data from path ${filePath}`);
                    const updatedJsonData = jsonData.filter((car) => car.id !== id);
                    fs.writeFile(filePath, JSON.stringify(updatedJsonData, null, 2), () => {
                        resolve(jsonData);
                    });
                }
                catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
});
exports.deleteCarFromJSON = deleteCarFromJSON;
function generateUUID() {
    // Generate a random GUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
