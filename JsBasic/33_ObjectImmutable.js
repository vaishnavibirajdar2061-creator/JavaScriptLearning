/*

To create Immutable Object we use freeze() from Object interface
- Once Object is immutable we can not perform any opretaion on that object

freeze()
-------------
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

seal()
-----------
Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
*/

const product={

        name:"iphone",
        price:800000
}

console.log(product);//{ name: 'iphone', price: 800000 }

Object.freeze(product);
//adding new property
//product.color="Red";//TypeError: Cannot add property color, object is not extensible

//modify existing property
//product.price=9000000;//TypeError: Cannot assign to read only property 'price' of object 
//delete existing property
//delete product.name;//TypeError: Cannot delete property 'name' 

console.log("------------------");

const browser={
    name:"chrome",
    version:140
}

console.log(browser);//{ name: 'chrome', version: 140 }

//seal() will allow modification for values of existing properties
Object.seal(browser);

//add the property
//browser.vendor="Google";//TypeError: Cannot add property vendor, object is not extensible

//delete the property
//delete browser.version;//TypeError: Cannot delete property 'version'

//modify existing properties value: yes
browser.name="Edge";

console.log(browser);







