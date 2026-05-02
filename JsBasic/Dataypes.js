
let num = 123;
console.log(num);
console.log(typeof num);

let num1 = 123.23;
console.log(num1);
console.log(typeof num1);

let num2 = -12323;
console.log(num2);
console.log(typeof num2);

num2 = "vaishnvi"
console.log(num2);
console.log(typeof num2);

console.log("------------------Boolean____________________");
let isActive= true;
console.log(isActive);
console.log(typeof isActive);

let isemp= false;
console.log(isemp);
console.log(typeof isemp);

console.log("------------------String____________________");
// js String is primitive data types and  String is a object


/* Way to decalere 
1. using single quote  = 'helo'
2. using double quote = "hello"
3.Using templte String back tick = `hello`;


*/

let fname = 'vaishnai';
console.log(fname);
console.log(typeof fname);

let gen = 'f';
console.log(gen);
console.log(typeof gen);

// templte string
// when you have morethan two line or more string we have to used always templte not a single or double quote

let name='vaishu';
let res = `${name} want to joine new company within two month I dont Have other Opetion I dont know anything I want to join`;

console.log(res);
console.log(typeof res);


let pname ='Apple MacBook Pro 16';

let requestpaylod= `
{
  "name": ${pname},
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`;

console.log(requestpaylod);
console.log(typeof requestpaylod);



console.log("------------------Undefind____________________");

/* When you declare  a vaiable without initialization then type and value 
of that varibale will be undefinded

*/

let city;
console.log(city);
console.log(typeof city);


console.log("------------------Null____________________");

/* 
  when we check type of null variable you will get objcet  not a null type
  this is referred as bug in js 
*/

let cprofile = null;
console.log(cprofile)
console.log(typeof cprofile);

console.log("------------------Bigint____________________");

// any number added suffix n they will become bigint

let num0= 23456789n;
console.log(num0);
console.log(typeof num0);


console.log("------------------Symbol type____________________");
// symbol type applicable for object
// symbol type used store some unique data

console.log("------------------Js type____________________");
// Object Literal technique
// In js every  Object hold with {}
// In js Object is a Key and value pair
// here key are default String

let user={};
console.log(user);
console.log(typeof user);

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

