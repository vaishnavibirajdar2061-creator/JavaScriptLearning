

//Synchronous: one process at a time

console.log("Program starts....");

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}
console.log("Program ends....");

console.log("-----------------");

//Asynchronous: multiple process run parallelly

console.log("Program starts....");
setTimeout(() => {
    console.log("SetTimeOut() calling after 3sec....");
    
}, 3000);

console.log("Program ends....");


console.log("-----------------");

//API test

// let response=fetch("https://restful-booker.herokuapp.com/booking");
// console.log(response);//Promise { <pending> 

/*
How to handle
------------------
use asynchronous method and inside async method use await keyword at line where promise is return
*/


async function apiTest()
{
let response=await fetch("https://restful-booker.herokuapp.com/booking");
console.log(response);
}


//call
apiTest();






