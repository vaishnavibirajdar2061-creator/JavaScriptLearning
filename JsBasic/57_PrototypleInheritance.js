

/*
What is Prototypal Inheritance
Prototypal inheritance is a core JavaScript mechanism
 where objects directly inherit properties and methods from other objects through an internal link called a prototype.
 __Proto__
*/

//older js
const parent={
    pid:1010,
    getData()
    {
        console.log("This is Parent Data...");
        
    }
}

console.log(parent);
console.log(typeof parent);

console.log("Parent id is: "+parent.pid);
parent.getData();

//create prototype so that we can share properties
//__proto__

const child={
    __proto__:parent
}

console.log(child.pid);

child.getData();

console.log("-----------------------");

//Prototype as interface used to add new properties for Javascript object

class Employee
{
    id;
    name;

    constructor(id,name)
    {
        this.id=id;
        this.name=name;

    }
}

Employee.prototype.language="Js";

//Object
let e1=new Employee(101,"Kiran");
//e1.language="Js";
console.log("Employee id is: "+e1.id+" Employee name is: "+e1.name+" Skill: "+e1.language);


let e2=new Employee(201,"Geeta");
console.log("Employee id is: "+e2.id+" Employee name is: "+e2.name+" Skill: "+e2.language);




