

//includes():Determines whether an array includes a certain element, returning true or false as appropriate.

let product=['mobile','keyboard','mouse','monitor','printer'];
console.log(product);

//search for display?
let status=product.includes('display');
console.log("Product display is available in Array?: "+status);//false

//search for mouse?
console.log("Mouse is a part of Product?: "+product.includes('mouse'));//true