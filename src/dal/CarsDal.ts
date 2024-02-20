import * as path from 'path';
import { config } from '../config';
import { addNewCarToJSON, deleteCarFromJSON, readJSONFile, updateCarInJSON } from '../common/helpers';
import { Car } from '../models';
import Logging from '../common/helpers/Logging';

export class CarsDAL {
    private static instance: CarsDAL;
    private dataFilePath = '';

    constructor() {
        this.setDataFilePath();
    }
    public static getInstance(): CarsDAL {
        if (!CarsDAL.instance) {
            CarsDAL.instance = new CarsDAL();
        }
        return CarsDAL.instance;
    }
    private setDataFilePath() {
        if (this.dataFilePath) return;
        const dataPath = config.db.file_path;
        const workingDir = process.cwd();
        const fullDataFilePath = path.join(workingDir, dataPath);
        Logging.info(`Full Data file Path -- ${fullDataFilePath}`);
        this.dataFilePath = fullDataFilePath;
    }


    async getCarsDAL() {
        const data: Car[] = await readJSONFile(this.dataFilePath);
        return data;
    }
    
    async getCarDAL(id: string) {
        const data: Car[] = await readJSONFile(this.dataFilePath);
        const car = data.find((car) => car.id === id);
        return car || null;
    }
    

    async CreateCarDAL(car:Car) {
        const createdCar = await addNewCarToJSON(this.dataFilePath,car);
        return createdCar;
    }

    async DeleteCarFromDAL(carID:string) {
        const createdCar = await deleteCarFromJSON(this.dataFilePath,carID);
        return createdCar;
    }

    async UpdateCarDAL(car:Car) {
        const updatedCar = await updateCarInJSON(this.dataFilePath,car);
        return updatedCar;;
    }

}
