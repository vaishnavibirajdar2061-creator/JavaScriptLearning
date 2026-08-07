/*

In Javascript two types of Functions available
1.Function declaration
2.Function Expression
    2.1 Anonymous function: function without name 
    2.2 Arrow function: short hand function 


    1st define function
    2nd call function 


*/

console.log("--------1.function declaration-------------");


function test1()
{
  
    console.log("This is function declaration is calling....");
    
}

//call
test1();
console.log(typeof test1);//function


console.log("--------2.Anonymous function-------------");

let test2=function()
        {
            console.log("This is Anonymous function is calling....");
    
        }

        //call
        test2();

console.log("--------3.Arrow function-------------");


let test3=()=>{console.log("This is arrow function is calling....");}


//call
test3();














