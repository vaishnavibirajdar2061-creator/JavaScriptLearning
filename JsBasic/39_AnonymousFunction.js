/*

In Javascript two types of Functions available
1.Function declaration
2.Function Expression
    2.1 Anonymous function: function without name 
    2.2 Arrow function: short hand function 


    1st define function
    2nd call function 


*/

console.log("-------Anonymous Function--------");

let test1=function()
            {
            console.log("This is Anonymous function is calling....");
    
            }

//call
test1();
console.log(typeof test1);//function


console.log("-------Anonymous Function with parameters--------");
/**
 * 
 * @param {string} msg 
 */
let test2=function(msg)//1 parameter
        {
            console.log("Message is: "+msg);

        }

        //call
        test2("Hello All,after Js classes we will starts with typescript...")


console.log("-------Anonymous Function with parameters & return keyword--------");

/**
 * 
 * @param {string} userName 
 * @param {string} userEmail 
 * @returns 
 */

function empData(userName,userEmail)
{

    return `User name is: ${userName} and email is: ${userEmail}`
}


//call
console.log(empData("Kiran","kiran@gmail.com"));







