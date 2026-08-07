/*
Encapsulation
---------------------
Binding of data and function together in single unit is called encapsulation

What is Purpose 
--------------------
Data hiding/ data security

Real Example
-----------------
Capsule,password,class,banking app,mobile...etc


How to implement Encapsulation in Js
------------------------------------------
- First declare data as private data 
- To access private data use public methods: use setters() and getters()

How to create variable private in Js
------------------------------------
#variableName;

Private data we can not call outside class

setter(): set the data and it starts with set prefix
getter(): get the data and it starts with get prefix

*/


export class Employee
{
    id;
    name;
    #salary=50000;

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

    show()
    {
        console.log("Employee id is: "+this.id);
        console.log("Employee name is: "+this.name);
               
    }
//setter()
    setSalary(salary)
    {
        this.#salary=salary;
    }

    //getter()
    getSalary()
    {
        return this.#salary;
    }
}

//Object
// const e1=new Employee(101,"Saritha");
// e1.salary=90000;

// e1.show();
// console.log(e1.salary);




