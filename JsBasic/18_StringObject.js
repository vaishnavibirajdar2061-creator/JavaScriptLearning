/*
In Js every object is dynamic object

String is primitive data type and Immutable object
String is collection of characters

let fname="Jay"
    fname=['j','a','y'].....Array
    index= 0    1   2

    Property(variable)
    --------------
    length

    Methods
    --------------
    1.includes()
    2.toUpperCase()
    3.toLowerCase()
    4.trim()
    5.concat()
    6.split()
    7.charAt(index)
    8.indexOf(char)
    9.replace()
    10.replaceAll()...etc

*/
let number=[10,20,30,40];//array
    //index 0  1   2  3
console.log(number);
console.log(number[2]);//30


console.log("-----String Immutaility--------");

//once you declare string you can not modified the value
let fname="Jay";
console.log(typeof fname);//string
console.log(fname);
//fname[1]="A";//TypeError: Cannot assign to read only property '1' of string 'Jay'

fname="Amit";
console.log(fname);

//length property:Returns the length of a String object.
console.log("Length of fname is: "+fname.length);//4
console.log("------------------");
//toUpperCase() and toLowerCase()
let s1="Hello All";
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

//for equality between string we use ===
console.log("------------------");
//includes()=partial match/Find substring which is part of that current string includes()
let s2="Playwright is end to end automation framework";

console.log(s2.includes('automation'));//true
console.log(s2.includes('Selenium'));//false

console.log("------------------");

//trim()= To ignore white space before and after

let s3="     welcome All       ";
console.log(s3);
console.log(s3.trim());

console.log("------------------");
//charAt(index): return character from string of string type
let s4="Hello All";
//index 012345678

console.log("character from index 4: "+s4.charAt(4));//o

//indexOf('char'):return index number of character
//Returns the position of the first occurrence of a substring, or -1 if it is not present.
let s5="Using Playwright Api testing also possible";

//index number for i character
console.log("index number for i?: "+s5.indexOf('i'));//2

//get the index for 2nd i
console.log("second i?: "+s5.indexOf('i',3));//12

//get the inde of last i
console.log("last occurrence: "+s5.lastIndexOf('i'));//38

//get the index of Playwright?: return index of p
console.log("index is: "+s5.indexOf('Playwright'));//6
console.log("------------------");
//substring():Returns the substring at the specified location within a String object.
console.log(s5.substring(6));//Playwright Api testing also possible

console.log(s5.substring(6,20));//Playwright Api

//concat():Returns a string that contains the concatenation of two or more strings.
let s6="Hello";
let s7="All";
console.log(s6+" "+s7);
console.log(s6,s7);
console.log(s6.concat(" "+s7));

console.log("------------------");
//replace():Replaces text in a string, using a regular expression or search string.

let s8="Automation Testing is Important and modern Automation Testing with modern tool is most important"

console.log(s8);
console.log(s8.replace('Testing',"******"));

//replaceAll()
console.log(s8.replaceAll('Testing',"######"));
console.log("------------------");

//split():Split a string into substrings using the specified separator and return them as an array.
//split() return String[] array
let tools="Selenium,Cypress,Playwright,Postman,Appium";
console.log(tools);

let arr=tools.split(',');
console.log(arr);

console.log(arr[2]);

//OR
let tool=tools.split(",")[2];
console.log(tool);

//OR
console.log(tools.split(',')[2]);


console.log("--------------");

let date="May 2026";
let month=date.split(" ")[0];
let year=date.split(" ")[1];

console.log("month is: "+month);
console.log("year is: "+year);



















































