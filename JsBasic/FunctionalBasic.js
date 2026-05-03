
/*
Function
1.Functional Decalaration : 
  ex: function test()
  {
  Console.log("hello")
  }
  
  call = test()
------------------------------------------------
2. Function Expression =
 a. Anonymous function( function without name)

  let info=  function()
    {
     Console.log("hello")
    }

    call = info()
 ------  - ------------------------------------------------
 b. Arrow  function 

let test = ()=>
{
    }

    call = test();


*/

// Functiona Declaration

console.log("----------------------Functional decalaration________________________________");

function test1()
{
    console.log("this is function decalaration");
}

test1();


console.log("----------------------Anonymous function ________________________________");

let test2 = function()
{
    console.log("this is anonymous function");

}
test2();

console.log("----------------------Arrow function ________________________________");

let test3 = ()=>
{
    console.log("this is arrow function");
}

test3();
