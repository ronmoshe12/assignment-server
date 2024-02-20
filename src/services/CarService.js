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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const dal_1 = require("../dal");
class CarService {
    // * Singleton Design Pattern */
    static getInstance() {
        if (!CarService.instance) {
            CarService.instance = new CarService();
        }
        return CarService.instance;
    }
    getAllCars() {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchedCars = yield dal_1.CarsDAL.getInstance().getCarsDAL();
            return fetchedCars;
        });
    }
    getCarById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchedCars = yield dal_1.CarsDAL.getInstance().getCarDAL(id);
            return fetchedCars;
        });
    }
    createNewCar(car) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCar = yield dal_1.CarsDAL.getInstance().CreateCarDAL(car);
            return createdCar;
        });
    }
    deleteCar(carID) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCar = yield dal_1.CarsDAL.getInstance().DeleteCarFromDAL(carID);
            return deletedCar;
        });
    }
    updateCar(car) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCar = yield dal_1.CarsDAL.getInstance().UpdateCarDAL(car);
            return updatedCar;
        });
    }
}
exports.CarService = CarService;
