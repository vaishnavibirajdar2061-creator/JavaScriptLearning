
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

var toolname= "selenium";
var toolname = "playwright";
var toolname = 1234;

console.log(toolname) // 1234

//reassignment

var toolversion = 123;
toolversion = 234;
toolversion = 500;

console.log(toolversion ) // 500

// let =Redeclaration not allowed and reassignment are allowed

//Redeclaration
let bname= 'chrome';
let bname ='edage';
console.log(bname); // SyntaxError: Identifier 'bname' has already been declared

// reassignment
let  edage = 20;
edage =21;
edage=34;
console.log(edage);


// const = Redeclaration not allowed and reassignment are  not allowed

//Redeclaration
const name='vaishu';
const name='sid';
console.log(name); // SyntaxError: Identifier 'name' has already been declared

// reassignment
const chrome = 10;
chrome=23;
chrome =38;
console.log(chrome); // TypeError: Assignment to constant variable.

