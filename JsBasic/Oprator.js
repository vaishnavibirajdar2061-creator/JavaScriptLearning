/*
1.Arithmetic Operator: +,-,*,/,%
2.Unary Operator: ++ --
3.Relational Operator: >,>=,<,<=,!=
    Equality
    ==(loose Equality)  ===(strict Equality)
4.Logical Operators (&&(AND) ||(OR) !(NOT))

*/

console.log("====Arithmetic Operators=======");
let a=10,b=2;
console.log(a+b);
// let c=a+b;
// console.log("Addition is: "+c);
// console.log("Addition is: "+a+b);//Addition is: 102 wrong result
console.log("Addition is: "+(a+b));
console.log("Subtraction is: "+(a-b));
console.log("Multiplication is: "+(a*b));
console.log("Division is: "+(a/b));
console.log("Modulus is: "+(a%b));

console.log("-----Interview--------");
console.log(190/0);//Infinity
console.log(-90/0);//-Infinity
console.log("Hello"/5);//NaN(Not a number)
console.log(undefined/3);//NaN
console.log(0/0);//NaN
console.log(null/10);//0
//null in number format is 0
console.log(Number(null));


console.log("======Unary Operator=======");
/*
Increment (++)
----------------------
1.postIncrement a++
2.PreIncrement  ++a

let a=100;
a++= a=a+1 a=101

Decrement (--)
------------------------
1.PostDecrement a--
2.PreDecrement  --a

let a=100
a-- a=a-1 a=99
*/

//post Increment:value will increment and assign it later
let c=100;
console.log(c);//100
console.log(c++);//100
console.log(c);//101

//preIncrement: value first increment and immediate assign
let d=200;
console.log(d);//200
console.log(++d);//201

//post Increment with assignment operator
let x=90;
let y=x++;//x value assign first then increment
console.log(x);//91
console.log(y);//90

let i=678;
let j=i++;
console.log(i);//679
console.log(j);//678

//pre Increment with assignment operator
let p=67;
let q=++p;//value increment first then assigned
console.log(p);//68
console.log(q);//68

let u=178;
let v=++u;
console.log(u);//179
console.log(v);//179

//Decrement
let o=90;
console.log(o);//90
console.log(o--);//90
console.log(o);//89

let r=190;
console.log(r);//190
console.log(--r);//189

//post decrement with assignment operator
let f=67;
let g=f--;
console.log(f);//66
console.log(g);//67

//pre decrement with assignment operator
let s=45;
let k=--s;
console.log(s);//44
console.log(k);//44

console.log("=======Relational Operator=========");
/* >,>=,<,<=,!=
    Equality
    ==(loose Equality)  ===(strict Equality)

    Test Data
    ================
    s=k=44 f=66 g=67 o=89 x=91 y=90 p=q=68

*/
console.log("less than <: "+(s<y));//true
console.log("less than equal to <=: "+(p<=q));//true
console.log(g<=q);//true
console.log(o<=q);//false
console.log("greater than >:"+(x>y));//true
console.log("greater than equal to >=: "+(o>=s));//true
console.log(s>=f);//false
console.log("not equal to !=: "+(s!=f));//true
console.log(s!=k);//false

/*
Equality operator
=====================

1.== loose equality
--------------------------
here values will be coerced first then compare

2.=== strict equality
--------------------------
here values will not be coerced and compare as it is values
- recommended 

cocerced: conversion

*/

console.log("100" == 100);//true
console.log(undefined == null);//true


console.log(100 == "100");//true
console.log(200 == "100");//false

console.log("------------");

console.log("100" === 100);//false
console.log(undefined === null);//false

console.log("=====Logical Operators======");
/*
 c1     c2          &&(AND)         ||(OR)      !(NOT)
true    true        true            true        false
true    false       false           true        false
false   true        false           true        true
false   false       false           false       true
 Test Data
================
    s=k=44 f=66 g=67 o=89 x=91 y=90 p=q=68

*/
console.log("====&&====");


console.log(s===k && g<x);//true
console.log(p===q && x<y);//false
console.log(y<=k && x>y);//false
console.log(s<k && p<q);//false

console.log("====||====");


console.log(s===k || g<x);//true
console.log(p===q || x<y);//true
console.log(y<=k || x>y);//true
console.log(s<k || p<q);//false

console.log("====!(NOT)====");

console.log(s===k);//true
console.log(!(s===k));//false


console.log(s>x);//false
console.log(!(s>x));//true

//post
let m=55;
//m=m++; //m=55
m++;//correct 
console.log(m);//56
let n=m;
console.log(n);//56

//pre
let w=55;
++w;
console.log(w);
let h=w;
console.log(h);