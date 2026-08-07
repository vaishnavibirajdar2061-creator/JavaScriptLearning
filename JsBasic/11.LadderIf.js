
//Multiple condition test

//compare 3 numbers and check greater or equals number

let n1=3000,n2=200,n3=30000;

if(n1>n2 && n1>n3)
{
    console.log(n1+" is greater than "+n2+" & "+n3);
    
}else if(n2>n1 && n2>n3)
{
        console.log(n2+" is greater than "+n1+" & "+n3);

}else if(n1===n2 && n2===n3)
{
    console.log("All Numbers are Equal numbers");
    
}else{
        
    console.log(n3+" is greater than "+n1+" & "+n2);

}

console.log("------------------------");

//Automation(browser validation:chrome|firefox|edge)

let bname="edge";

if(bname === "chrome")
{
    console.log("Testcase is executing on Chrome!");
    
}else if(bname === "edge")
{
    console.log("Testcase is executing on Edge!");
}else if(bname === "firefox")
{
    console.log("Testcase is executing on Firefox!");
}else
{
    console.log("Wrong browser...");
    
}






















