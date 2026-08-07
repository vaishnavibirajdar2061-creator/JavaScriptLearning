/*
Inheritance:
Acquiring properties of one class into another class is called Inheritance
-It is IS-A relation

What is Purpose?
-----------------------
- To avoid code cuplication
- To reuse methods
- Ti achieve Run time polymorphism(Method Overriding)

Real time example:
Parent and child relation

Types
==============
1.Single level
2.Multilevel
3.Heirarchical

No direct support It need Interface from data abstractio
4.Multiple 
5.Hybrid

How to implement
---------------------
using extends keyword


*/


export class Vehical
{


    breakFeature()
    {
        console.log("Vehical....break()");
        
    }


}


//Multilevel inheritance
export class Car extends Vehical
{
    price()
    {
        console.log("car.....1L");
        
    }

start()
{
    console.log("Car....start()");
    
}

refule()
{
    console.log("Car....refule()");
    
}

stop()
{
    console.log("Car....stop()");
    
}


}









