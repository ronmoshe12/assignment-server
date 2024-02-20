
import { CarsDAL } from '../dal';
import { Car } from '../models';

export class CarService {
    private static instance: CarService;

    // * Singleton Design Pattern */
    public static getInstance(): CarService {
        if (!CarService.instance) {
            CarService.instance = new CarService();
        }
        return CarService.instance;
    }

    async getAllCars(): Promise<Car[]> {
        const fetchedCars = await CarsDAL.getInstance().getCarsDAL();
        
        return fetchedCars;
    }

    async getCarById(id:string): Promise<Car | null> {
        const fetchedCars = await CarsDAL.getInstance().getCarDAL(id);
        return fetchedCars;
    }

    async createNewCar(car:Car): Promise<Car> {
        const createdCar = await CarsDAL.getInstance().CreateCarDAL(car);
        return createdCar;
    }
    async deleteCar(carID:string): Promise<Car> {
        const deletedCar = await CarsDAL.getInstance().DeleteCarFromDAL(carID);
        return deletedCar;
    }

    async updateCar(car:Car): Promise<Car> {
        const updatedCar = await CarsDAL.getInstance().UpdateCarDAL(car);
        return updatedCar;
    }
}
