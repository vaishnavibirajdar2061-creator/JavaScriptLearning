

let person={
    id:101,
    name:"Sarika",
    address:'Delhi',
    profile:"QA"
}

console.log(person);//{ id: 101, name: 'Sarika', address: 'Delhi', profile: 'QA' }
console.log("------------");
//get the keys from current object
//Keys():Returns the names of the enumerable string properties and methods of an object.
let allKeys=Object.keys(person);
console.log(allKeys);//[ 'id', 'name', 'address', 'profile' ]

console.log("------------");

//get the values from current object
let allValues=Object.values(person);
console.log(allValues);//[ 101, 'Sarika', 'Delhi', 'QA' ]

console.log("------------");
//get the key and value pair for object
let allEntries=Object.entries(person);
console.log(allEntries);
/*[
  [ 'id', 101 ],
  [ 'name', 'Sarika' ],
  [ 'address', 'Delhi' ],
  [ 'profile', 'QA' ]
]
*/