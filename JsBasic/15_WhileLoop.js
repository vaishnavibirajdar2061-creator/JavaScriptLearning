/*
For number of iterations/execution we use Loop
------------------------------------------------------
1.for loop
-----------
    -Number of ietrations are fixed/known then use for loop
    Scenarios: Calendar/datepicker 30/31/28/29
               dropdown with options 

2.while loop
------------
    -Is called Entry control loop
    -Number of iterations are not fixed or unknown then use while loop
    Scenarios: Pegination(WebTable)
               Pageloadtimeout


3.do-while loop
-------------------
    -Is called Exit control loop
    -One time iteration without matter what condition it is like true or false



Array/Object
-----------------
4. for...of loop
    -for of loop ietartes over a value and applicable for string/array

5. for...in loop
    -for in loop ierates over keys/index and applicable for Object
*/

//print hello 5 times

let i=1;
while(i<=5)
{
    console.log("Hello");
       
    i++;
}

//number of iteration is not fixed
//sum of digits num=123 1+2+3=6: number of digits are not fixed:while loop

let num=103,rem=0,sum=0;

while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);//returns greater integer value
    sum=sum+rem;
}

console.log("Sum of digits : "+sum);


console.log("-------------");

let nm=45328,rm=0,rev=0;

while(nm>0)
{
    rm=nm%10;
    nm=Math.floor(nm/10);
    rev=rev*10+rm;
}

console.log("Reverse number is: "+rev);

/*Assignment

1. declare a number and check wether that number is Palindrome
num--->do reverse--->then compare number is Palindrome

2. declare a number and check number is Armstrong number (153)

153=1*1*1+5*5*5+3*3*3
   =153

*/







