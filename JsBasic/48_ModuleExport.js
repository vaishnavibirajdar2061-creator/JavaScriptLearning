

//Inside the class we can have method not function

export let browserName="chrome";


export function getData()
{
console.log("This is getData().....");

}

export class StudentData
{
    id;
    name;

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

    //Method
    show()
    {
        console.log("Student id is: "+this.id);
        console.log("Student name is: "+this.name);
               
    }

}
//Object

// const s1=new StudentData(101,"Abhi");
// s1.show();

//way2 to export any variable,function,class
//export {StudentData,browserName,getData}