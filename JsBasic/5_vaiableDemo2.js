/*

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
//Redeclaration and reassignment

//var: redeclaration & reassignment allowed(older)
//redeclaration
var toolName="Selenium";
var toolName="Playwright";
var toolName=1234;

console.log(toolName);//1234
//reassignment
var version=130;
version=150;
version=160;
console.log(version);

console.log("-------let---------");

//redeclaration
let browser="chrome";
//let browser="Edge";//SyntaxError: Identifier 'browser' has already been declared
console.log(browser);
//redeclaration is not allowed in case of let

//reassignment
let age=20;
age=21;
age=22;

console.log(age);//22

console.log("------const-----");

//redeclaration+reassignment+modification not allowed

const orgName="HSBC";
//const orgName="IBM";//SyntaxError: Identifier 'orgName' has already been declared
console.log(orgName);

//reassignment
const book="Learn Selenium";
//book="Learn Selenium with TestNG";//TypeError: Assignment to constant variable.
console.log(book);


























