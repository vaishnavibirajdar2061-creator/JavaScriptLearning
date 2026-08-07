/*
Everything is Js is Dynamic Object
Object represent some key and value pair combination
Js object enclosed with {}
In Js every key is by default is String type and values are real data(number/string/boolean)

Ways to declare an Object
==========================
1. Object literal
2. Using Class ......(added in ES6 feature)

3. Using constructor Function
4. Using Prototype based Object (Object interface)


*/

console.log("------Object Literals------");

//empty object
let user={};
console.log(user);//{}
console.log(typeof user);//object

console.log("---------------");

let person={
    fname:"Sarang",
    age:25,
    address:'Pune',
    isEmployeed:true
}

console.log(person);

/*
How to read any single property from Object
1.dot notation .
2.bracket notation[]
*/
//1.dot notation: objectName.key

console.log("Person age is: "+person.age);
console.log(person.fname);

//2 bracket notation[]: objectName['key']
console.log(person['address']);
console.log(person['isEmployeed']);

//How to add new Property to object
person.phno=9809798679;
console.log(person);

//how to modify object properties
person.address='Mumbai';
console.log(person);

//how to delete any object Property
delete person.isEmployeed;
console.log(person);

console.log("----------------------");


//How to Iterate an Object: for...in loop
//for...in iterates over index and keys

for(let key in person)
{
    console.log(key);
    
}

//for...in loop where we can have keys and value

for(let key in person)
{
    console.log(" For Key: "+key+" value is: "+person[key]);
    
}




















