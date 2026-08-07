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


console.log("-------------------------------");

console.log("-----Async method-----");


let p1=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application launch successfully!")
},2000);
})


let p2=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("There is Error!")
},1000);
})

let p3=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application closed!")
},3000);
})


Promise.all([p1,p2,p3]).then((res)=>{
console.log(res);

}).catch((err)=>{
console.log(err);

})


console.log("-----race()---------");
//race() returns first fullfilled/rejected promise


let p111=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application launch successfully!")
},1000);
})


let p222=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("There is Error!")
},2000);
})

let p333=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application closed!")
},1000);
})


Promise.race([p111,p222,p333]).then((res)=>{
console.log(res);

}).catch((err)=>{
console.log(err);

})

console.log("---------------------");
//allSetteled(): returns result of all promises(fullfill+reject) with status



let p101=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application launch successfully!")
},1000);
})


let p202=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("There is Error!")
},2000);
})

let p303=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Application closed!")
},1000);
})


Promise.allSettled([p101,p202,p303]).then((res)=>{
console.log(res);

}).catch((err)=>{
console.log(err);

})





