/*
Method Overriding
----------------------
Overriding is only possible when two class are in Is-A relation
and same name method with same syntax declare in parent and child 
class then Child class override parent class properties. 

- for upgrade feature child class override parent class
*/

class Parent
{
    color()
    {
        console.log("Blue");
        
    }
}

class Child extends Parent
{
   //@Override updated method 
    color()
    {
        console.log("Yellow");
        
    }
}
//object

let p1=new Parent();
p1.color();//Blue

let c1=new Child();
c1.color();//yellow
