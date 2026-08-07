/*

Type Casting:
================
Type casting is conversion of one type of data into other type

Rule:
data should be compatible the conversion possible
In Js typeCocercion is applicable for only 3 datatypes
1.number
2.string
3.boolean

In Js we have two types
===========================
1.Implicit Casting/Type Cocercion 
-------------------------------------
this is automatic conversion taken care by Js Engine

2.Emplicit Casting
------------------------------
this is forcefull conversion or manula conversion
Number(): number constructor(constructor help to initialize object)
String()
Boolean()

When It comes to Boolean conversion
----------------------------------------
truthy vs falsy values

Truthy
===============
Any true value in boolean context is called truthy value in Js
For Example;
non zero number,non empty string ,true

Falsy
============
Any false value in boolean context is called falsy value in Js
For Example:
-----------------
"",0,null,NaN,undefined


*/

console.log("=====String conversion======");
/*
Type coercion/Implicit Casting
number/boolean--->string
when we use string with + operator then other data(boolean/number) will convert into string
*/

let a="hello"+100+true;//here 100 and true coerced into string
console.log(a);//Hello100true
console.log(typeof a);//string

let b=100+20+"100";//100+20=120 then 120 coerced into string
console.log(b);//120100
console.log(typeof b);//string

let c="20"+100+55+"90";
console.log(c);//201005590
console.log(typeof c);

console.log("=====number conversion======");
/*
Implicit casting
-------------------
string/boolean--->number
when we use other arithmetic operator(*,/,-) then string or boolean data if
it compatible then convert into number
*/

let d="Hello"*10;//here "hello" in not compatible
console.log(d);//NaN

//string--->number
let n1="100"*10;//"100" coerced into number 100*10
console.log(n1);//1000
console.log(typeof n1);//number

//boolean-->number
let n2=true*10;//true coerced into number 1*10=10
console.log(n2);//10
console.log(typeof n2);//number

let n3="90"-20;//"90" coerced into number 90-20=70
console.log(n3);//70
console.log(typeof n3);//number

let n4="90"-20+"100";//here "90" coerced into number 90-20=70+"100" 70 coerced into string
console.log(n4);//70100
console.log(typeof n4);//string

let n5="100"/5;//"100" coerced into number 100/5
console.log(n5);//20
console.log(typeof n5);//number

console.log("====Explicit conversion====");

//string to number conversion
let a1="100";
console.log(typeof a1);//string
console.log(a1+100);//100100

let num1=Number(a1);//number constructor
console.log(typeof num1);//number
console.log(num1+100);//200

//number to string conversion
let num2=900;
console.log(typeof num2);//number
console.log(num2+100);//1000
//number to string
let s1=String(num2);//"900"
console.log(typeof s1);//string
console.log(s1+100);//900100

console.log("-----------");

/*
Automation:
----------------
bill="Total amount is 5000";

validate amount should be less than 10000

*/


let bill="Total amount is 5000";
// index    0     1     2   3
//extract the number from string
let data=bill.split(" ")[3];

console.log(data);//"5000"

console.log(typeof data);//string

//string to number
let amount=Number(data);
console.log(amount);//5000

console.log(typeof amount);//number

//compare
if(amount < 10000)
{
    console.log("Test pass...amount matched!");
    
}else{
    console.log("Test Fail....amount is not matched!");
    
}

//using Number()
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number("abcd"));//NaN

console.log("=====Boolean Conversion==========");

/*truthy vs falsy values

Truthy
===============
Any true value in boolean context is called truthy value in Js
For Example;
non zero number,non empty string ,true

Falsy
============
Any false value in boolean context is called falsy value in Js
For Example:
-----------------
"",0,null,NaN,undefined
*/

console.log(Boolean("Jay"));//true

console.log(Boolean(""));//empty string-false
console.log(Boolean(190));//true
console.log(Boolean(0));//false
console.log(Boolean(-190));//true
console.log(Boolean(89.77));//true
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean("Hello"));//true


console.log(1 + +"2"+"2");

console.log(1+ -"1"+"2");


































