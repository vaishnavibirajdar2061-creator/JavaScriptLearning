/*
For single true condition we used simple If statement
*/

//year validation
//let cYear=2026;//positive data

let cYear=2027;//negative scenario

console.log("Program started....");

if(cYear===2026)
{
    console.log("Current year matched!");
    
}

console.log("Program ends....");

console.log("============");

//validate current url format
let url="https://www.google.com";

//strict equality
if(url === "https://www.google.com")
{
    console.log("Url matched...lunch app in browser");
    
}

//partial match : looking for https protocol
//for partial match from string we use includes()
if(url.includes("https"))
{
console.log("Url matched...lunch app in browser");

}

