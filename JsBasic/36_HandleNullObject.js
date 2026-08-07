

/*
Optional Chaining (?.)
---------------------------- 
is a JavaScript operator used to safely access properties or methods of an object. 
 If the object is null or undefined,it returns undefined instead of throwing a TypeError.

 To handle any null or undefined types object we use optional chaining (?)


*/

let user={
    id:101,
    name:"Sarang",

    //method
    print()
    {
        console.log("id is: "+this.id);
        console.log("name is: "+this.name);
    }

}

user=null;

console.log(user?.id);//TypeError: Cannot read properties of null (reading 'id')
console.log(user?.name);

user?.print();

console.log("Handle the TypeError!");



