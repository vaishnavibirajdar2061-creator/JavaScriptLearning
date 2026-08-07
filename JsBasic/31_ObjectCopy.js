/*
spread Operator(...)
=====================
-Applicable for array,Object and function
-To copy array and object we use spread operator
- For function to pass n number of arguments we use spread operator
*/

//array
let a1=[10,20,30];
let b1=[...a1];
console.log(a1);
console.log(b1);

console.log("-------------");

let u1={
    id:101,
    name:"Kiran"
}

//copy same object to u2

let u2={...u1};//here u1 object copied into u2

console.log(u1);
console.log(u2);


//modification
u2.city="Pune";

console.log(u1);
console.log(u2);