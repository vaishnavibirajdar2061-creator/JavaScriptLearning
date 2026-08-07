/*
Switch case is used for Multiple conditions test
Switch case simplify ladder if scenarios
In switch we can not used relational operator
In Switch we compare key===value

break statment is applicable in switch and loop statements
break statement will take control of program outside of switch and loop


*/

let num1=100,num2=10;
let operator="!"

switch (operator)
 {
    case "+":
        console.log("Addition is: ",(num1+num2));
        break;
    case "-":
        console.log("Subtraction is: ",(num1-num2));
        break;
    case "*":
        console.log("Multiplication is: ",(num1*num2));
        break;
    case "/":
        console.log("Division is: ",(num1/num2));
         break;
        default:
        console.log("Wrong Operator!");
        
}

console.log("------------------");

//traffic signals

let color="red";

switch (color) {
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "red":
        console.log("Stop");
        break;

    default:
        console.log("Error!");
         break;
}

console.log("---------------------");

//automation
//browser validation
let bname="Edge";

switch (bname.toLowerCase()) {
    case "chrome":
        console.log("Test case executes on Chrome!");
        break;
     case "edge":
        console.log("Test case executes on Edge!");
        break;
     case "firefox":
        console.log("Test case executes on Firefox!");
        break;
        
    default:
        console.log("Wrong browser!");
        break;
}


//String conversion methods: toUpperCase() toLowerCase()
let fname="Rohit";

console.log(fname.toUpperCase());//ROHIT
console.log(fname.toLowerCase());//rohit







