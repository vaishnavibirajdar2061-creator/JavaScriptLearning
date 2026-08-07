/*
Array is Dynamic Data structure
Array is Dynamic Object in Js
Array is Collection of data/object in Js
Array stores data as per index 
Index starts with 0

Data Structure:
----------------
It is an organize way to declare and store data where we can perform 
operations on data

Types of Array
------------------
1. Single dimensional Array(1D)

2. MultiDimensional Array (2D)

Ways to Declare Array
-----------------------
1.Using Array literals
2.Using Array Constructor
3.Using Array.of()

Syntax
============
let arrayVariableName=[val1,val2,val3....valn]

Array Support one property: length
Array Support multiple methods

Array Iteration
----------------
1.Using simple for loop
2.Using for...of loop

for..of loop Vs for...in loop
===================================
for..of loop
------------------
-Iterates over values and It is applicable for array and string

for...in loop
----------------------
-Iterates over keys or indexing and It is applicable for Object

*/


let arr=[10,20,30,40,50,60,70];
console.log("Total Elements : "+arr.length);
console.log(arr);
console.log("-------For loop----------");

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

console.log("-------For...of loop----------");

//Iterates over values
for(let i of arr)
{
    console.log(i);
    
}

console.log("-------For...in loop----------");

//iterates over key or index
for(let i in arr)
{
    console.log(i);
    
}

console.log("-------------");

for(let i in arr)
{
    console.log("At index: "+i+" value is: "+arr[i]);
    
}

console.log("-------------");
let tools=['Selenium','Cypress','Playwright','Appium','Jmeter'];

for(let i of tools)
{
    console.log(i);
    
}
