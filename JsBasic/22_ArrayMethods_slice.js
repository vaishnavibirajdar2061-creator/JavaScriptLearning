


//slice(): returns the portion of array as substring
//slice(startindex,endindex): exclude last index number:endindex-1
/*
Returns a copy of a section of an array.
 For both start and end, a negative index can be used to indicate an offset 
 from the end of the array. For example, 
-2 refers to the second to last element of the array.
*/

let id=[10,20,30,40,50];
//index 0  1  2  3  4
//index -5 -4 -3 -2 -1  reverse index

console.log(id);//[ 10, 20, 30, 40, 50 ]

let slice1=id.slice(1,3);//here starting form index 1 and lastindex-1
console.log(slice1);//[ 20, 30 ]


let slice2=id.slice(0,4);//here starts with 0 and (3)lastindex-1
console.log(slice2);//[ 10, 20, 30, 40 ]

//here starts with 0 and return all elements of array as no end index defined
let slice3=id.slice(0);
console.log(slice3);//[ 10, 20, 30, 40, 50 ]

console.log(id.slice(2));//[ 30, 40, 50 ]

//get the last 3 elements of array
console.log(id.slice(-3));//[ 30, 40, 50 ]

//get the last 2 elements
console.log(id.slice(-2));//[ 40, 50 ]

//get last 5 ids
console.log(id.slice(-5));//[ 10, 20, 30, 40, 50 ]








