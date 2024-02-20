import express from 'express';
import { CarsController } from '../controllers';

export const CarsRouter = express.Router();

CarsRouter.get('/get', CarsController.getAllCars);
CarsRouter.get('/getById/:id', CarsController.getCarById);
CarsRouter.post('/create', CarsController.createNewCar);
CarsRouter.put('/update', CarsController.updateCar);
CarsRouter.delete('/delete/:id', CarsController.deleteCar);
