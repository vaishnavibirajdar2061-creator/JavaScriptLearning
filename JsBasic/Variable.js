/*
Vaiable
====================

1 let = Global + block  
- ANy 
 2 const =

3. var = global+ functional 
 =============================================

 1.global
 Variable decalre inside js file not inside fun  then we can acces it globally

 2.functional 
 - variable decalre inside function. acces it only through functional

 3. block 
 - Apllical for only const and let
 - variable decare inside block {} then such scope is block scope

 -----------------------
 Variable
=============
Name of storage where we can store a data

In Js we use 3 keywords to declare variable(var,let,const)
1.var(not recommended /older)
--------------------------------
-Scope: Global +Functional
-Redeclaration + reassignment allowed
-var are always hoisted


//modern Js
2.let
----------------
-Scope: Global + Block
-Any mutable data we store using let
-Redeclaration is not allowed
-Reassignment is allowed
- Due to temporal deadzone let is not hoisted

3.const(final keyword in Java)
---------------
-Scope: Global + Block
-Any Immutable data we store using const
-Redeclaration is not allowed
-Reassignment is not allowed
- Due to temporal deadzone const is not hoisted

Scope:
============
1.Global scope
--------------------
Variables declare insideJs file not inside any function and then you can access it globally(everywhere)

2.Functional Scope
-----------------------
Variables declared inside function and accessed only through function is called functional scope

3.Block Scope
-------------------
-Applicable for let and const keyword
- Variables declared inside block { } then such scope is block scope




*/


var fname = "Yashika";
let city = "Banglore";
const email = "yashika@gmail.com";

console.log("First name is: " + fname);
console.log("City is: " + city);
console.log("Email is: " + email);


console.log("-----------------------------Global Data within Function_____________________________");

function test1() {
    console.log("First name is: " + fname);
    console.log("City is: " + city);
    console.log("Email is: " + email);
}

test1();

console.log("----------------------------- Functional scope _____________________________");

////functional scope is applicable for var type
// ANy data we can acess within function Outside WE can acess 

function test2() {
    let bname = 'chrome';
    let bversion = 101;
    const bvendor = 'google'
    console.log("bname is :" + bname);
    console.log("bname version :" + bversion);
    console.log("bname vendor :" + bvendor);

}
test2()
console.log("bname is :" + bname); // ReferenceError: browserVersion is not defined
console.log("bname version :" + bversion); // ReferenceError: browserVersion is not defined
console.log("bname vendor :" + bvendor); // ReferenceError: browserVersion is not defined


console.log("----------------------------- Block scope _____________________________");


if(true)
{
    let toolversion = 234;
    const toolname = 'playwright';
    console.log("tool name is :"+toolname);
     console.log("tool version is :"+toolversion);
}
 console.log("tool name is :"+toolname); // ReferenceError: browserVersion is not defined
 console.log("tool version is :"+toolversion); // ReferenceError: browserVersion is not defined

console.log("----------------------------- _____________________________");
// var is not block score 
var a=10; // global
function test3()
{
    var a=20; // functioanal or local variable
    console.log(a);

    if(true)
    {
        var a=30;
        console.log("if : "+a);
    }

     console.log("value of a "+a); //30
}

test3();


// let and const
// any modifcation is done applicable for only block not outside block
let b=10;
console.log(b);
function test4()
{
    let b=20;
    console.log(b);
    if(true)
    {
        let b=30
        console.log("if :"+b); // 30
    }

    console.log("value of b :"+b); // b is 20  and b is block sccope
    // if suppose let b=20 is comment we will get b=10 value 

}

test4();

