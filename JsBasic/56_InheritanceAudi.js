import { Car } from "./53_InheritanceCar.js";

//Heirarchical Inheritance
export class Audi extends Car
{

    autoGear()
    {
        console.log("Audi....autoGear()");
        
    }
    price()
    {
        console.log("Audi....80L");
        
    }
}