import { Engine, ICar, Maintenance } from '../interface';

export class Car implements ICar {
    brand!: string;
    model!: string;
    year!: number;
    color!: string;
    mileage!: number;
    engine!: Engine;
    transmission!: string;
    vin!: string;
    maintenance!: Maintenance[];
    id!: string;
}
