/*
In real time we need to convert Javascript Object into JSON(Javascript object notation) String
or JSON String into JS Object
1.JSObject---->JSON String
JSON.stringfy()
Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

2.JSONString--->JSObject
Here we use JSON.parse()
Converts a JavaScript Object Notation (JSON) string into an object.
*/

//Js Object
let user={
    id:101,
    name:"Parag"
}

console.log(user);
console.log(typeof user);//object

//Jsobject to JSONString

let jsToJson=JSON.stringify(user);
console.log(jsToJson);
console.log(typeof jsToJson);//string



console.log("--------------");

//JSON String
let payload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`

console.log(payload);
console.log(typeof payload);

//Json  string to JS Object
let jsonToJs=JSON.parse(payload);
console.log(jsonToJs);
console.log(typeof jsonToJs);//object
