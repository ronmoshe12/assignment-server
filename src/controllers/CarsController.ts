import { NextFunction, Request, Response } from 'express';
import { CarService } from '../services';
import Logging from '../common/helpers/Logging';
import { Car } from '../models';

const getAllCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cars = await CarService.getInstance().getAllCars();
        return res.status(200).json({ cars: cars, total: cars.length });
    } catch (error) {
        Logging.error(error);
        return res.status(500).json({ error });
    }
};

const getCarById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const carID:string = req.params.id;
        const Car = await CarService.getInstance().getCarById(carID);
        if(!Car){
            return res.status(403).json({
                message: "car not found."
            });
        }
        return res.status(200).json({ Car });
    } catch (error) {
        Logging.error(error);
        return res.status(500).json({ error });
    }
};

const createNewCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const car:Car = req.body.car
        const createdCar = await CarService.getInstance().createNewCar(car);
        return res.status(200).json({ message: "Created!", data: createdCar });
    } catch (error) {
        Logging.error(error);
        return res.status(500).json({ error });
    }
};

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const carID:string = req.params.id;
        const deletedCar = await CarService.getInstance().deleteCar(carID);
        return res.status(200).json({ message: "Deleted!", data: deletedCar });
    } catch (error) {
        Logging.error(error);
        return res.status(500).json({ error });
    }
};

const updateCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const car:Car = req.body.car
        const createdCar = await CarService.getInstance().updateCar(car);
        return res.status(200).json({ message: "Updated!", data: createdCar });
    } catch (error) {
        Logging.error(error);
        return res.status(500).json({ error });
    }
};

export const CarsController = { getAllCars, getCarById,  createNewCar, deleteCar, updateCar};
