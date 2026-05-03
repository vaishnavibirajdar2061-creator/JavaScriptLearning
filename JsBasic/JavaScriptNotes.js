


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


------------------------------------------------------------------------------------------------------------------
/*

In Javascript two types of Functions available
1.Function declaration
2.Function Expression
    2.1 Anonymous function: function without name 
    2.2 Arrow function: short hand function 


    1st define function
    2nd call function 

    ---------------------------------------------------------------------------------------------------------------------------------
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

--------------------------------------------------------------
/*
Hoisting is behaviour of js which allowes you can not 
access variable before declaration

var/function delcration:fully hoisted
var get initialize before declaration with undefined so console.error
will not appear


let/const/modern function: if we try to call variable before decaration 
it will throw error


--------------------------------------------------------------------------------------




*/



