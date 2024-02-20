import * as fs from 'fs';
import Logging from './Logging';
import { Car } from '../../models';

export const readJSONFile = (filePath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            } else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging.success(`Successfully to Fetched Data from path ${filePath}`);
                    resolve(jsonData);
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};

export const addNewCarToJSON = async (filePath: string,newCarData: Partial<Car>): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            } else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging.success(`Successfully to Fetched Data from path ${filePath}`);
                    newCarData = {
                        id : generateUUID(),
                        ...newCarData
                    }
                    jsonData.push(newCarData);
                    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2),()=>{
                        resolve(jsonData);
                    });
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};

export const updateCarInJSON = async (filePath: string,newCarData: Car): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            } else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging.success(`Successfully to Fetched Data from path ${filePath}`);
                    const updatedJsonData = jsonData.filter((car:Car) => car.id !== newCarData.id);
                    updatedJsonData.push(newCarData);
                    fs.writeFile(filePath, JSON.stringify(updatedJsonData, null, 2),()=>{
                        resolve(updatedJsonData);
                    });
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};

export const deleteCarFromJSON = async (filePath: string,id: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                Logging.error(`Failed to Fetch Data from path ${filePath}`);
                reject(err);
            } else {
                try {
                    const jsonData = JSON.parse(data);
                    Logging.success(`Successfully to Fetched Data from path ${filePath}`);
                    const updatedJsonData = jsonData.filter((car:Car) => car.id !== id);
                    fs.writeFile(filePath, JSON.stringify(updatedJsonData, null, 2),()=>{
                        resolve(jsonData);
                    });
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};

function generateUUID() {
    // Generate a random GUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


