

export type Engine = {
    type: string;
    displacement: string;
    fuelType: string;
}

export type Maintenance = {
    type: string;
    date: string;
    mileage: number;
    mechanic: string;
    cost: number;
    notes: string;
}

export interface ICar {
    id: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
    engine: Engine;
    transmission: string;
    vin: string;
    maintenance: Maintenance[];
}

// // Example usage:
// const car: Car = {
//     id: "98a7bfe3-2c9f-4f58-bc2a-fdaa5bc532a1",
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Silver",
//     mileage: 25000,
//     engine: {
//         type: "Inline-4",
//         displacement: "2.5L",
//         fuelType: "Gasoline"
//     },
//     transmission: "Automatic",
//     vin: "4T1BF1FK5EU358399",
//     maintenance: [
//         {
//             type: "Oil Change",
//             date: "2023-01-15",
//             mileage: 20000,
//             mechanic: "AutoCare Services",
//             cost: 50.00,
//             notes: "Used synthetic oil"
//         },
//         {
//             type: "Tire Rotation",
//             date: "2023-06-20",
//             mileage: 22000,
//             mechanic: "QuickFix Auto",
//             cost: 20.00,
//             notes: "Rotated tires front to back"
//         }
//     ]
// };
