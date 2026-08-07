


/*
Call Back function/Higher order function
---------------------------------------------
If any function pass as Parameter to other function then that function called 
call back function or higher order function
*/

function getName(name)//name as parameter
{
console.log("Hello "+name);

}


//Businesslogic
function greet(username,callBackFun)//here 2 parameters and callBackFun this function
{
callBackFun(username)
}

//calling
greet("Sameer",getName);//here getName is call back function

console.log("--------------------");

function add(a,b)
{
    console.log("Addition is: "+(a+b));
    
}


function sub(a,b)
{
    console.log("Subtractionis: "+(a-b));
    
}

function mul(a,b)
{
    console.log("Multiplication is: "+(a*b));
    
}

function div(a,b)
{
    console.log("Division is: "+(a/b));
    
}


function calculator(a,b,fun){

    fun(a,b);
}

//calling

calculator(10,4556,add);
calculator(50,33,sub);
calculator(78,5,mul);
calculator(100,4,div);










