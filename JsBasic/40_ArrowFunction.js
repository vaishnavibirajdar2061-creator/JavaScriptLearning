/*

In Javascript two types of Functions available
1.Function declaration
2.Function Expression
    2.1 Anonymous function: function without name 
    2.2 Arrow function: short hand function 


    1st define function
    2nd call function 


*/


console.log("------Arrow function--------");

let test1=()=>{console.log("Arrow function is calling.....");};

//call
test1();
console.log(typeof test1);//function

console.log("------Arrow function with parameters-------");

//single parameter

/**
 * 
 * @param {string} msg 
 */
let test2=(msg)=>{
console.log("Message is : "+msg);
}


//calling
test2();//Message is : undefined
test2("Hello all");

//single parameter without () bracket allowed

let test3=num1=>{
    if(num1>0)
    {
        console.log(num1+" is positive number");
        
    }

}


//call
test3(90);

console.log("-----------");
//multiple parameter
let test4=(a,b)=>{
                console.log("Multiplication is: "+(a*b));

                }

//call
test4(10,30);


console.log("------Arrow function with parameters & return keyword-------");


let test5=(num)=>{

                return num*num;
                }

//call

let square=test5(10);
console.log("Square of number: "+square);

//OR

console.log("Square is: "+test5(20));