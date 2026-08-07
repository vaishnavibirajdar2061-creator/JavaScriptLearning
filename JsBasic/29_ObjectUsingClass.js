


class EmployeeData
{

    //data
    id;
    fname;
    profile;
    address;


    //constructor
    constructor(id,fname,profile,address)
    {
        this.id=id;
        this.fname=fname;
        this.profile=profile;
        this.address=address;
    }
/*SyntaxError: A class may only have one constructor
    constructor(id,fname)
    {
        this.id=id;
        this.fname=fname;

    }
*/
}

//object

/*
When object is created without refrence then such object called no referenece object

*/
const e1=new EmployeeData(101,"Kiran","Dev","Mumbai");
console.log(e1.id);
console.log(e1.fname);
console.log(e1.profile);
console.log(e1.address);


console.log("-------------");

const e2=new EmployeeData(201,"Smita","Qa","Pune");
console.log(e2.id);
console.log(e2.fname);
console.log(e2.profile);
console.log(e2.address);

console.log("-------------");
const e3=new EmployeeData(301,"Parag");
console.log(e3.id);//301
console.log(e3.fname);//parag
console.log(e3.profile);//undefined
console.log(e3.address);//undefined

//No reference Object
new EmployeeData(401,"Kirti",'Dev',"Pune");


//null Object
let e4=new EmployeeData(501,"Jay","QA","Delhi");
e4=null;//object refernce pointing to null object

console.log(e4.id);//TypeError: Cannot read properties of null (reading 'id')


/*
Garbage Collector
------------------------
-It is automechanism called by Js internally for memory management
-GC always monitor Js engine Heap Memory where object will create
and store, GC will delete the unused object from Heap memory  and this is how heap 
memory will maintain

Which objects are eligible for Garbage Collector
------------------------------------------
1.No reference object
2. null reference object

*/

