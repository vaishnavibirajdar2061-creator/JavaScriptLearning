
/*
forEach(),map(),filter(),reduce()
*/

//forEach()
let num=[1,2,3,4,5];
console.log(num);

//cube of number
// for(let i of num)
// {
//     console.log(i*i*i);
    
// }
num.forEach((i)=>{//here i is any variable which represent array number

    console.log(i*i*i);
})

console.log("--------------");

let links=['about us','privacy policy','registration','login']
//change array data to uppercase

links.forEach((link)=>{
console.log(link.toUpperCase());

})

console.log("--------------");

//map(): Transform the array element

let footerLinks=['AboutUs','help','privacyPolicy'];
//scenario: define theses links for Amazon
footerLinks.map((link)=>{
console.log("Amazon "+link);

})

console.log("--------");

let arr=[10,20,30,40,50];
//square of each number
arr.map((num)=>{
console.log(num*num);

})

console.log("------------");
//filter: filter the array element
//Returns the elements of an array that meet the condition specified in a callback function.
let elements=[1,2,3,4,5,6,7,8,9,10];
//filter only even number

let evenNumbers=elements.filter((num)=>num%2===0)
console.log(evenNumbers);
console.log("------------");
let list=['Keyboard','mouse','monitor','printer'];

let listOption=list.filter((opt)=>{
                            if(opt==='printer')
                                {
                                 return opt;
                                }
                        })

console.log(listOption);

console.log("-------------");

//reduce(): reduce the array element like sum of array elemenet,avg of number


let arrnNum=[10,20,30,40,50];

let result=arrnNum.reduce((sum,num)=>sum+num,0);
console.log(result);


// let sum=0;
// for(let i of arrnNum)
// {
//     sum=sum+i;
// }

// console.log(sum);

let data=["Hello","Hi","welcome"];

//total lenght of all strings from array
let lenghtofArray=data.reduce((total,ele)=>total+ele.length,0)

console.log(lenghtofArray);


















