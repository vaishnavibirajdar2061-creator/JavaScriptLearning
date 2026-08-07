/*
Hoisting is behaviour of js which allowes you can not 
access variable before declaration

var/function delcration:fully hoisted
var get initialize before declaration with undefined so console.error
will not appear


let/const/modern function: if we try to call variable before decaration 
it will throw error


*/


test1();
test2();//error:ReferenceError: Cannot access 'test2' before initialization

console.log("----var----");

console.log(a);//undefined
var a=100;
console.log(a);//100

console.log("-----let-----");

//console.log(b);//TDZ//ReferenceError: Cannot access 'b' before initialization
let b=200;
console.log(b);

console.log("----const----");

//console.log(c);//TDZReferenceError: Cannot access 'c' before initialization
const c=100;//

console.log("-----------------");


//older
function test1()
{
    console.log("hello");
    
}


//modern synatx
let test2=function()
{
console.log("Hi");

}



























