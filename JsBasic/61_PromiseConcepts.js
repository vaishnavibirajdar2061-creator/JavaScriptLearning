/*
what is Promise
-----------------------
- A Promise is an object used to managing asynchronous operataion
- promise allow you to write code that continue after a specific event occur
- Promises enabled the handling of data that is not currently available
but will be available in the future
- A promise has 3 states pending, resolve and reject

pending: This is initial state when the promise is neither fullfilled or rejetcted

fullfilled: This state means asynchronous operation associated with
promise has been successfully completed

Rejected: This state indicates that the asynchronus operation has failed
or been rejected

setteled
============
-when promise is either fullfilled or rejected it enter the settled state
-In this state there are two important methods
1.then():
------------
when promise successfully transitions to the fullfilled state, then method
allows you to specify a callback function that will work with completed data
-this is used to define what should happen when a successfull result is obtained

catch():
-----------
when promise transitions to the "rejected" state the catch method let you specify
a callback function that will work with rejected error
-This is used to handle situation where the operation fails


*/

//design

let myPromise=new Promise((resolve,reject)=>{

    let status=false;

    if(status)
    {
     resolve('Test Pass!');
    }
    else
    {
    reject('Test Fail!');
    }
})

//call/setteled/handles
myPromise.then((result)=>{
console.log("Successfull: "+result);
}).catch((error)=>{
console.log("Rejected: "+error);
})

console.log("--------Resolve state-------");

let resolvePromise=new Promise((resolve,reject)=>{
resolve("Promise is fullfill!");

})

//call/handle
resolvePromise.then((result)=>{
console.log(result);

})

console.log("--------Reject state-------");

let rejectPromise=new Promise((resolve,reject)=>{
reject("Promise has Error!")
})

rejectPromise.catch((error)=>{
console.log(error);

})

console.log("-----------------------");

//resolve promise
let p1=Promise.resolve("Promise completed!");

p1.then((result)=>{
    console.log(result);
    
})

console.log("-------------");
//reject promise
let p2=Promise.reject("Promise has Error!");

p2.catch((error)=>{
console.log(error);

})

console.log("----Promise with async operation:resolve----");

let p3=new Promise((resolve,reject)=>{

    setTimeout(() => {
       resolve("Task requied 3sec to complete!");
        
    }, 3000);

})


//resolve:then()
p3.then((res)=>{
console.log(res);

})



console.log("----Promise with async operation:reject----");


let p4=new Promise((resolve,reject)=>{

    setTimeout(() => {
        reject("Task is rejected after 3sec!")
    },3000);
})


//handle
p4.catch((error)=>{
console.log(error);

})

console.log("------then(), catch() and finally()----");

//finally() will execute for promise setteled.(fullfill/reject)


function getUser()
{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            //user object
            let user={
                name:"Smita",
                role:"QA"
            }
            resolve(user)
        },2000);
    })

}

getUser().then((result)=>{
console.log(result);

})

console.log("-------------------------");


function getUserDetails()
{
    return new Promise((resolve,reject)=>{

        let status=false;
        if(status)
        {
            setTimeout(() => {
                let user={
                    name:"Parag",
                    id:1010,
                    role:"SDET"
                }
                resolve(user);
            },2000);
        }else
        {
            setTimeout(() => {
                reject("User not found!")
            }, 2000);
        }
    })
}


//handle
getUserDetails().then((res)=>{
console.log(res);

}).catch((err)=>{
console.log(err);

}).finally(()=>{
    console.log("Looking for Automation engineer!");
    
})


console.log("---------Promise.all()-----");
/*
What is Promise.all() in JavaScript? 
Promise.all() is used when you want to run multiple promises in 
parallel and wait until all of them are resolved. 
If all promises succeed, it resolves 
If any one promise fails, it immediately rejects

*/

//+ve user case
let t1=Promise.resolve("Task1 is done!");
let t2=Promise.resolve("Task2 is done!");
let t3=Promise.resolve("Task3 is done!");

Promise.all([t1,t2,t3]).then((res)=>{
console.log(res);

})
console.log("-----Async method-----");


let p11=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application launch successfully!")
},2000);
})


let p12=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Get the title!")
},1000);
})

let p13=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application closed!")
},3000);
})


Promise.all([p11,p12,p13]).then((res)=>{
console.log(res);

})
























