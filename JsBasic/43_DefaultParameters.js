

function details(name="Jay")
{
console.log("Hello "+name);

}

details("Radhika");
details();

console.log("--------------------");


/**
 * 
 * @param {String} bname 
 * @returns 
 */

function launchBrowser(bname="chrome")
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
    console.log("Browser not found so Launch a defualt browser Chrome");
    return true;
    
        
   }

}

//calling
let isBrowserLaunch=launchBrowser("Safari");

//if browser launch i would like to open application

if(isBrowserLaunch)
{
    console.log("Enter Url to open application...");
    
}










