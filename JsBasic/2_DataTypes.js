/*
DataType: 
-------------------
Data types define what type of data we declare inside variable

Javascript is dynamically type means we dont required to store/define data type while
declarating any variable

Datatypes
---------------
1.Primitive type
    1.number
    2.string
    3.boolean
    4.undefined
    5.null
    Added after ES6
    6.BigInt  NA for Automation
    7.Symbol  NA for Automation

2.Non primitive type
    Object
    Array

    Syntax to declare variable
    -----------------------------
    let keyword: Any mutable data
    const keyword: Any immutable data

    let variableName=value;

    typeof operator
    ====================
    typeof operator will help to understand what type data is stored inside variable

*/

console.log("---------Number---------------");
/*
In Js any positive integer(123),negative integer(-123) and decimal digit number(123.56) 
stored as number type
*/
let num1=90;
console.log(num1);//90
console.log(typeof num1);//number


let num2=-56779;
console.log(num2);//-56779
console.log(typeof num2);//number


let num3=89.67;
console.log(num3);//89.67
console.log(typeof num3);//number

/*num3="priyanka";
console.log(num3);
console.log(typeof num3);//string*/

console.log("--------Boolean(true/false)-----");

let isActive=true;
console.log(isActive);//true
console.log(typeof isActive);//boolean

let isEmployeed=false;
console.log(isEmployeed);//false
console.log(typeof isEmployeed);//boolean

console.log("--------String-----");
/*
String is coolection of characters
In Js string is Primitive data type and string is an Object

Ways to declare
-------------------
1.using single quaot 'Hello'
2.using double quaot "Hello"
3.using template string(back tick) `Hello` ES6
*/

let fname="Sujit";
console.log(fname);//Sujit
console.log("First name is: "+fname);

console.log(typeof fname);//string


let lname="Sharma";
console.log(lname);//Sharma
console.log(typeof lname);//string


let gender='M'
console.log(gender);//M
console.log("Gender is: "+gender);

console.log(typeof gender);//string

//template string 

/*
in template string we can read data from variable using Syntax
${variable name}
*/
let name="Priyanka";
let certificate="ISTQB";

let profile=`My name is ${name} ,
I am having over 15years of experience in software testing and I 
am ${certificate} certified tester.`;

console.log(profile);
console.log(typeof profile);//string

let productName="Apple MacBook Pro 16";
let diskSize="1 TB";

let requestPayload=`
{
  "name": ${productName},
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": ${diskSize}
  }

}`

console.log(requestPayload);
console.log(typeof requestPayload);

console.log("-------undefined--------");
/*
When we declare a variable without initialization then 
type and value of that variable will be undefined
*/

let city;
console.log(city);//undefined
console.log(typeof city);//undefined


console.log("--------null--------");
/*
null is unknown data/information
When we check typeof this null variable you will get Object not null type
this is reffered as bug in javascript

*/

let cProfile=null;
console.log(cProfile);//null
console.log(typeof cProfile);//object


//After ES6-BigInt  and  symbol
//bigInt: after number add suffix n

console.log(Number.MAX_VALUE);//1.7976931348623157e+308

let num4=17976931348623157n;
console.log(typeof num4);//bigint

/*
Symbol type applicable for object
Symbol type used to store some unique data
*/

console.log("-----Javascript object----------");
/*
Nonprimitive data type
Object literal technique
In Js every object holds with {}
In Js object is Key and value pair
here keys are by default string
*/


let user={};
console.log(user);
console.log(typeof user);//object

let person={
            name:"Sarang",
            city:"pune",
            isActive:true

            }

    console.log(person);
    console.log(typeof person);
    
    //operation on object
    //add a new property 
    person.salary=7899900;
    console.log(person);

    //modify property
    person.city="mumbai";
    console.log(person);

    //symbol type
//every key is string
    let pid=Symbol('id');
    console.log(typeof pid);
    
    
console.log(person);
person[pid]=1010;
console.log(person);

//modify symbol data
person.pid=3030;
console.log(person);








































































