/*
Rest Parameter/spread Operator
A rest parameter (...) allows a function to accept a 
variable number of arguments and stores them in an array, 
making it easy to handle multiple values dynamically.

In function rest parameter should be last parameter
*/


function selectDropdownValues(...city)
{
console.log("Selected entries:"+city);

}

//call
selectDropdownValues("Pune");
selectDropdownValues("Pune","Mumbai","Delhi","Nashik");

console.log("--------");


function empData(name,...data)
{
console.log("Details: "+name+" : "+data);

}

empData("Sameer","Delhi",20,787989,"sameer@gmail.com");