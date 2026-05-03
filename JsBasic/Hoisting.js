

/*
Hoisting is behaviour of js which allowes you can not 
access variable before declaration

var/function delcration:fully hoisted
var get initialize before declaration with undefined so console.error
will not appear


let/const/modern function: if we try to call variable before decaration 
it will throw error


*/

// var dont TDZ data any time we will get data
// console.log(a)
// var a=10
// console.log(a)----20
//------------------------------------------------------------------------
// but let or const
// console(b) = TDZ
//let b=100

console.log("-----------------------var------------------");
console.log(a); // undefind
var a=100;
console.log(a); // 100

console.log("-----------------------let------------------");
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b=200;
console.log(b); // ReferenceError: Cannot access 'b' before initialization

console.log("-----------------------const------------------");

//console.log(c);//TDZReferenceError: Cannot access 'c' before initialization
const c=100;//

console.log("-----------------");

test1(); // hello

//older
function test1()
{
    console.log("hello");
    
};

test2(); //  ReferenceError: Cannot access 'test2' before initialization

//modern synatx
let test2=function()
{
console.log("Hi");

};