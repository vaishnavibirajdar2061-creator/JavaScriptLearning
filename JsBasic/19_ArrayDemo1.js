
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

*/
console.log("------Array Literals-----------");


let arr=[];
console.log(arr);//[]
console.log(typeof arr);//Object
console.log(arr.length);//0


//same type data
let sid=[101,102,103,104,105];
console.log("Total Ids are: "+sid.length);//5

//single entry with valid index
console.log(sid[3]);//104
console.log(sid[0]);//101
console.log(sid[4]);//105

//wrong indexing(invalid)
console.log(sid[9]);//undefined
console.log(sid[-1]);//undefined

//print all ids
console.log(sid);//[ 101, 102, 103, 104, 105 ]


console.log("-------------");

//mixed type data
let empData=['Sarang','Pune','M',20,989798678];
console.log(empData);//[ 'Sarang', 'Pune', 'M', 20, 989798678 ]
console.log(empData.length);//5


console.log("------Array Constructor-----------")

let arr1=new Array(5);//5 empty locations will create| here 5 is size
console.log(arr1.length);//5
console.log(arr1);//[ <5 empty items> ]
arr1[0]=100;
arr1[1]=200;
arr1[2]=300;
arr1[3]=400;
arr1[4]=500;
console.log(arr1);



let arr2=new Array(10,20,30,40,50,60);//6 elements stores into Array
console.log(arr2.length);//6
console.log(arr2);//[ 10, 20, 30, 40, 50, 60 ]

console.log("------Array.of()-----------")

let locations=Array.of("Pune","Mumbai","Delhi","Panjab");
console.log(locations);
console.log('Total Locations: '+locations.length);
console.log(locations[1]);//Mumbai

console.log("--------Multi D Array-------");

let multiD=[[1,2,3],
            [4,5,6],
            ];
console.log(multiD);
console.log("Number of rows: "+multiD.length);//2
console.log("Number of Columns: "+multiD[0].length);//3

//single value
console.log(multiD[1][1]);//5
console.log(multiD[1][3]);//undefined














