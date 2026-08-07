

/*

splice():
Removes elements from an array and,
 if necessary, inserts new elements in their place, 
 returning the deleted elements.

 Syntax
 ============
 splice(startindex,deletecount,'replceElement'): deleted elements

*/

let fruits=['Mango','Orange','Banana','Greps','Kiwi','Apple'];
//index       0       1        2        3       4      5
console.log(fruits);//[ 'Mango', 'Orange', 'Banana', 'Greps', 'Kiwi', 'Apple' ]

//remove 1 element from array where starting index 2
let removeEle1=fruits.splice(2,1);
console.log(removeEle1);//[ 'Banana' ]
console.log(fruits);//[ 'Mango', 'Orange', 'Greps', 'Kiwi', 'Apple' ]
                    //    0          1       2        3      4
//remove 2 elements from array where starting index 1
let removeEle2=fruits.splice(1,2);
console.log(removeEle2);//[ 'Orange', 'Greps' ]
console.log(fruits);//[ 'Mango', 'Kiwi', 'Apple' ]
                 //       0         1       2
                 console.log("------------------");
                 
//remove 1 elements from array and replace that ele with 'GreenApple' where starting index is 1
let removeEle3=fruits.splice(1,1,'GreenApple');
console.log(removeEle3);//[ 'Kiwi' ]

console.log(fruits);//[ 'Mango', 'GreenApple', 'Apple' ]


console.log("------------------------");

let products=['mobile','laptop','keyboard','mouse','monitor'];
//index       0         1          2         3       4
console.log(products);//[ 'mobile', 'laptop', 'keyboard', 'mouse', 'monitor' ]

//remove 2 products where starting index is 1
let deleteEle1=products.splice(1,2);
console.log(deleteEle1);//[ 'laptop', 'keyboard' ]
console.log(products);//[ 'mobile', 'mouse', 'monitor' ]

//remove 1 product from starting index 0 and replace with 'laptop', 'keyboard' 
let deletedEle2=products.splice(0,1,'laptop','keyboard');
console.log(deletedEle2);//[ 'mobile' ]
console.log(products);//[ 'laptop', 'keyboard', 'mouse', 'monitor' ]
//Reverse index           -4         -3          -2        -1  
//remove 2 last elements from array
let deletedEle3=products.splice(-2,2);
console.log(deletedEle3);//[ 'mouse', 'monitor' ]
console.log(products);//[ 'laptop', 'keyboard' ]

















