

let color=['Red','Blue','Yellow'];
console.log(color);//[ 'Red', 'Blue', 'Yellow' ]
console.log(color.length);//3

//push():Appends new elements to the end of an array, and returns the new length of the array.
let total=color.push('Black');
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Black' ]
console.log(color.length);//4
console.log(total);//4

console.log("---------------");

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift('Pink');
console.log(color);//[ 'Pink', 'Red', 'Blue', 'Yellow', 'Black' ]
console.log(color.length);//5

console.log("---------------");

//pop():Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeColor1=color.pop();
console.log(removeColor1);//Black
console.log(color);//[ 'Pink', 'Red', 'Blue', 'Yellow' ]
//empty array
let arr=[];
let removeColor2=arr.pop();
console.log(removeColor2);//undefined

console.log("---------------");
//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeColor3=color.shift();
console.log(color);//[ 'Red', 'Blue', 'Yellow' ]
console.log(removeColor3);//Pink
console.log(color.length);//3

console.log("---------------");

//join():Adds all the elements of an array into a string, separated by the specified separator string.

let words=["Hello","all","lets","learn","Javascript"];
console.log(words);

let sentence=words.join(" ");
console.log(sentence);

console.log("-------------------");
//reverse():Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
let id=[10,20,30,40,50];
console.log(id);
console.log(id.reverse());


console.log(color);
console.log(color.reverse());

console.log("-------------------");
//copy: To copy elements from array use ...Spread operator

let first=[1,2,3,4];
console.log(first);//[ 1, 2, 3, 4 ]

let second=[...first];//here first array elements are get copied into second array
console.log(second);//[ 1, 2, 3, 4 ]

let third=[10,20,...first];
console.log(third);//[ 10,20,1, 2, 3, 4 ]

let forth=[10,20,...second,30,40];
console.log(forth);

console.log("--------------");

let arr1=[1,2,3,4];
let arr2=[6,7,8,9,10];

let result=[...arr1,...arr2];
console.log(result);

console.log("--------------");
//concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.

let res=arr1.concat(arr2);
console.log(res);










