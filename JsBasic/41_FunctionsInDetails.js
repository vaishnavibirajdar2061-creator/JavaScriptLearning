
/*
Scenario:
Design function which accept browsername as parameters and and launch browser with
return values and based on value open application
*/

console.log("-------Function declartion------");

/**
 * 
 * @param {String} bname 
 * @returns 
 */

function launchBrowser(bname)
{

   switch(bname.trim().toLowerCase())
   {
    case "chrome":
        console.log("Launch a chrome browser");
        return true;
        break;

    case "edge":
        console.log("Launch a Edge browser");
        return true
        break;

    case "firefox":
        console.log("Launch a Firefox browser");
        return true;
        break;

    default:
    console.log("Invalid Browser!");
    return false;
    
        
   }

}

//calling
let isBrowserLaunch=launchBrowser("Edge ");

//if browser launch i would like to open application

if(isBrowserLaunch)
{
    console.log("Enter Url to open application...");
    
}

console.log("--------Anonymous Function-------------");

/**
 * 
 * @param {String} bname 
 */
let launchBrowser2=function(bname)
{
    switch (bname.trim().toLowerCase())
     {
        case "chrome":
        console.log("Launch a chrome browser");
        return true;
        break;

    case "edge":
        console.log("Launch a Edge browser");
        return true
        break;

    case "firefox":
        console.log("Launch a Firefox browser");
        return true;
        break;

    default:
    console.log("Invalid Browser!");
    return false;
    
    }

}

let statusOfBrowserLaunch=launchBrowser2("firefox");

//open application
if(statusOfBrowserLaunch)
{
    console.log("Open application.....");
    
}

console.log("--------Arrow Function-------------");

    /**
     * 
     * @param {String} bname 
     */
        let launchBrowser3=bname=>{

            switch (bname.trim().toLowerCase()) {
                case "chrome":
                console.log("Launch a chrome browser");
                return true;
                break;

                case "edge":
                console.log("Launch a Edge browser");
                return true
                break;

                case "firefox":
                    console.log("Launch a Firefox browser");
                    return true;
                    break;

                default:
                console.log("Invalid Browser!");
                return false;
    
    }
 }


let getStatus=launchBrowser3("chrome");

if(getStatus)
{
    console.log("Open application......");
    
}