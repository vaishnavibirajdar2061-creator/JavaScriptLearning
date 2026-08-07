/*
Multiple condition test
Nested= one if statement inside another if
*/

/*
Scenario1:
marks>=90---->A
marks>=95---->A++
otherwaise B

*/

let marks=97;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
        
    }else{
        console.log("A");
        
    }
}
else
{
console.log("B");

}

console.log("-------------------");

/*
Assignment:
first test for passing score 
if any student get 40=< then student pass the exam otherwaise Fail
If any student clear the exam then test grade
 40 to 60 ---->B if(marks>=40 && marks<=60); 
 61 to 80----->A
 81 to 100---->A++

*/


let score=85;

if(score>=40)
{
    console.log("Pass!");
    //grade
    if(score>=40 && score<=60)
    {
        console.log("B");
        
    }else if(score>=61 && score<=80)
    {
        console.log("A");
        
    }else if(score>=81 && score<=100)
    {
        console.log("A++");
        
    }
    
}else
{
    console.log("Fail!");
    
}
