/*

Super Keyword
============================
1.Super keyword can be used to refer immediate parent class instance variable.
2.Super keyword can be used to invoke immediate parent class method.
3.Super keyword can be used to call immediate parent class constructor.(super())
*/


class Parent
{
    pid;
    constructor(pid)
    {
        this.pid=pid;
        console.log("Parent constructor....");
        
        
    }
    //only through method we can access parent variable
    getPid()
    {
        return this.pid;
    }


    getParentIncome()
    {
        console.log("Parent income is $17000");
        
    }
}

class Child extends Parent
{
    cid;
    constructor(cid)
    {
        super(1234);//parent class constructor using super()
        this.cid=cid;
        console.log("This is child Constructor");
        
    }
    getChildIncome()
    {
        console.log("Parent id: "+super.pid);//undefined
        console.log(super.getPid());//here we are accessing property/variable through method
        console.log("child id : "+this.cid);
        super.getParentIncome();
        console.log("Child income is: $50000");
        
    }
}

//Object

let c1=new Child(2222);
c1.getChildIncome();





/*
let p1=new Parent(111);
p1.getParentIncome();
console.log("----------");
let c1=new Child(222);
c1.getParentIncome();
c1.getChildIncome();
*/