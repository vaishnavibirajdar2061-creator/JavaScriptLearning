

console.log("-------Function declaraction--------");

function test1()//0 parameters
{
    console.log("Function declaration is calling.....");
    
}

//call
test1();

console.log("-------Function declaraction with parameters--------");
/*
What is Parameter?
--------------------
parameters represent variable name

What is Arguments?
---------------------
Arguments represent real data which you can pass to function parameter
*/

//js documentation

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function add(num1,num2)//2 parameters
{
console.log("Addition is: "+(num1+num2));

}

//call
add(100,200);
//add("Hi","All");
//add("hello",true);

console.log("-------Function declaraction with parameters & return keyword--------");
/*
return Keyword
------------------
-From function if you wanted return any data/result then we use return keyword
-retrun keyword returns the result to the calling function
-return statment should be last line of that function/code

-for return keyword you have to change return type of function in typescript
*/

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 */

function subtract(num1,num2)
{
    console.log("This is subtraction method calling....");
    return num1-num2;
}

//call

let result=subtract(100,70);
console.log(result);

//OR

console.log(subtract(300,45));