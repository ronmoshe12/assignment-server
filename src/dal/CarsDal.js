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
exports.CarsDAL = void 0;
const path = __importStar(require("path"));
const config_1 = require("../config");
const helpers_1 = require("../common/helpers");
const Logging_1 = __importDefault(require("../common/helpers/Logging"));
class CarsDAL {
    constructor() {
        this.dataFilePath = '';
        this.setDataFilePath();
    }
    static getInstance() {
        if (!CarsDAL.instance) {
            CarsDAL.instance = new CarsDAL();
        }
        return CarsDAL.instance;
    }
    setDataFilePath() {
        if (this.dataFilePath)
            return;
        const dataPath = config_1.config.db.file_path;
        const workingDir = process.cwd();
        const fullDataFilePath = path.join(workingDir, dataPath);
        Logging_1.default.info(`Full Data file Path -- ${fullDataFilePath}`);
        this.dataFilePath = fullDataFilePath;
    }
    getCarsDAL() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, helpers_1.readJSONFile)(this.dataFilePath);
            return data;
        });
    }
    getCarDAL(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, helpers_1.readJSONFile)(this.dataFilePath);
            const car = data.find((car) => car.id === id);
            return car || null;
        });
    }
    CreateCarDAL(car) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCar = yield (0, helpers_1.addNewCarToJSON)(this.dataFilePath, car);
            return createdCar;
        });
    }
    DeleteCarFromDAL(carID) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCar = yield (0, helpers_1.deleteCarFromJSON)(this.dataFilePath, carID);
            return createdCar;
        });
    }
    UpdateCarDAL(car) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCar = yield (0, helpers_1.updateCarInJSON)(this.dataFilePath, car);
            return updatedCar;
            ;
        });
    }
}
exports.CarsDAL = CarsDAL;
