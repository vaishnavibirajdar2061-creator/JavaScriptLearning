/*
Polymorphism
------------------
One thing we can reuse in multiple forms

What is Pupose
-----------------
Method Reusability

Real Time Examples
-----------------------
Payment gateway, Ola,uber,swiggy,zomato

Types
================
1.Compile time polymorphism(Method Overloading)
--------------------------------------
Method can be overloaded when same name method declare in
same class with different signature

What is different signature
----------------------------
1.Number of parameter
2.different type of parameter
3.change order of parameter

Method Overloading not supported in Js
--------------------------------------------
In Js as this language is Interpreter based means 
decisions will taken only at runtime 
so now compiler phase as the time of writing logic
thats a reason Js does not support method Overloading


*/

class Test 
{
    login()//0 parameter
    {
        console.log("Login with default data");
        
    }

    login(username,password)//2 parameter
    {
        console.log("Login with Username "+username+" & password: "+password);
        
    }

    login(un,psw,otp)
    {
    console.log("Login with Username "+un+" & password: "+psw+" otp: "+otp);

    }
}
//object
let t1=new Test();
t1.login("Jay","test123");

console.log("-----------------------------");


function add()
{
    console.log("This is add().....");
    
}


// function add(a,b)//SyntaxError: Identifier 'add' has already been declared
// {
//     console.log("This is addition:"+(a+b));
    
// }

//calling
add();