/*
Destructuring
----------------------
Clean way to extract the elements/values from array/object
 and assign it to variable in a single line
*/

let arr=[10,20,30];
console.log(arr[1]);//20
console.log(arr);

//destructuring

let [a,b,c]=arr;
console.log(a,c);


let [p,q,r]=[100,200,300];
console.log(p,q,r);


let [i,,k]=arr;
console.log(i,k);

//rest/spread parameter ...
let num=[1,2,3,4,5];
let [t1,...pop]=num;
console.log(t1,...pop);

console.log("-------------------");
//Object destructuring

//for Object use variable names as same like object keys
let user={
    name:"Sarang",
    age:25
};

let {username,userage}=user;
console.log(username);//undefined
console.log(userage);//undefined


let{name}=user;
console.log(name);

console.log("-----------------");


let customer={
    name:"Tom",
    age:44,
    city:"LA",
    zip:1010
}

//function
function placeOrder({name,city})
{
console.log(name,city,zip);
}

//call
placeOrder(customer)















