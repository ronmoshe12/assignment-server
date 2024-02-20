"use strict";
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
exports.CarsController = void 0;
const services_1 = require("../services");
const Logging_1 = __importDefault(require("../common/helpers/Logging"));
const getAllCars = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield services_1.CarService.getInstance().getAllCars();
        return res.status(200).json({ cars: cars, total: cars.length });
    }
    catch (error) {
        Logging_1.default.error(error);
        return res.status(500).json({ error });
    }
});
const getCarById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carID = req.params.id;
        const Car = yield services_1.CarService.getInstance().getCarById(carID);
        if (!Car) {
            return res.status(403).json({
                message: "car not found."
            });
        }
        return res.status(200).json({ Car });
    }
    catch (error) {
        Logging_1.default.error(error);
        return res.status(500).json({ error });
    }
});
const createNewCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = req.body.car;
        const createdCar = yield services_1.CarService.getInstance().createNewCar(car);
        return res.status(200).json({ message: "Created!", data: createdCar });
    }
    catch (error) {
        Logging_1.default.error(error);
        return res.status(500).json({ error });
    }
});
const deleteCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carID = req.params.id;
        const deletedCar = yield services_1.CarService.getInstance().deleteCar(carID);
        return res.status(200).json({ message: "Deleted!", data: deletedCar });
    }
    catch (error) {
        Logging_1.default.error(error);
        return res.status(500).json({ error });
    }
});
const updateCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = req.body.car;
        const createdCar = yield services_1.CarService.getInstance().updateCar(car);
        return res.status(200).json({ message: "Updated!", data: createdCar });
    }
    catch (error) {
        Logging_1.default.error(error);
        return res.status(500).json({ error });
    }
});
exports.CarsController = { getAllCars, getCarById, createNewCar, deleteCar, updateCar };
