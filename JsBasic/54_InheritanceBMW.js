import { Car } from "./53_InheritanceCar.js";


export class BMW extends Car//Single level Inheritance
{
    autoEngine()
    {
        console.log("BMW......autoEngine()");
        
    }

    price()
    {
        console.log("BMW.....50L");
        
    }
}