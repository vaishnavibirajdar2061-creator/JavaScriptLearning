

import {Car} from "./53_InheritanceCar.js"
import {BMW} from "./54_InheritanceBMW.js"
import {Audi} from "./56_InheritanceAudi.js"

//Testing car

//parent class Object
let p1=new Car();
p1.start();//individual 
p1.refule();//individual
p1.stop();//individual
p1.breakFeature();//inherited
p1.price();


console.log("--------------------");

//child class object
let b1=new BMW();
b1.start();//inherited
b1.refule();//inherited
b1.stop();//inherited
b1.autoEngine();//individual
b1.breakFeature();//inherited
b1.price();

console.log("--------------------");
//child
let a1=new Audi();
a1.start();//inherited
a1.refule();//inherited
a1.stop();//inherited
a1.autoGear();//individual
a1.breakFeature();//inherited
a1.price();

