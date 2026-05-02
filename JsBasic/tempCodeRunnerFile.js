let person =
{
    name: 'vaishu',
    id : 101,
    city : 'pune',
    isActive : true
};

console.log(person);
console.log( typeof person);

 // add a property 
person.salary = 10000;

console.log(person);
console.log( typeof person);

// modify a property
 
person.id= 101010;
console.log(person);
console.log( typeof person);



console.log("------------------Symbol type____________________");

let pid = Symbol('id');
console.log(typeof pid);

console.log(person);

 person.pid = 23456;
 console.log(person);
 console.log(person['pid']);
 console.log(person.pid);

 person['id'] = 2040511;
 console.log(person);
 console.log(person.id);
