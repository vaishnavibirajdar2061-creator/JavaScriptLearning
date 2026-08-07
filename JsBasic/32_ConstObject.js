


let  browserName="chrome";
const frameworkName="Mocha";
console.log(browserName);
console.log(frameworkName);

console.log("-------------");

//reassignment
browserName="Edge";

//frameworkName="chai";//TypeError: Assignment to constant variable.

console.log(browserName);
console.log(frameworkName);

console.log("--------Object---------");

let user1={
    id:101,
    name:"pooja"
}

//const object will make refrence immutable  
//it will allowed modification for object

const user2={
    city:"Pune",
    profile:"QA"
}

console.log(user1);
console.log(user2);

console.log("------------");

user1.phno=79890890;
user1.id=111;
delete user1.name;

console.log(user1);

//change reference
user1={address:"Delhi"};

console.log(user1);

console.log("-----const-------");
console.log(user2);

//modification
user2.name="Abhiraj";
user2.city="Mumbai";
delete user2.profile;
console.log(user2);

//const keyword makes refernce immutable: you cannot change reference
//user2={age:30};//TypeError: Assignment to constant variable.

console.log(user2);

//copy for const object allowed
const user3={...user2};
console.log(user3);



