
import {test,expect, chromium, Browser, BrowserContext, Page} from "@playwright/test";

test("Test for Multiple Window handling",async({})=>{

let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

let context:BrowserContext=await browser.newContext();

let page:Page=await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//multiple links:declare array as element
let allLinks=[
page.locator("//a[contains(@href,'linkedin')]"),
page.locator("//a[contains(@href,'facebook')]"),
page.locator("//a[contains(@href,'twitter')]"),
page.locator("//a[contains(@href,'youtube')]"),
page.locator("//a[contains(@href,'orangehrm.com')]")

]

//iterate array collect single page and store it in result array
let allPages:Page[]=[];


for(let link of allLinks)
{
    let [childpage]=await Promise.all([
                            //start the event
                            context.waitForEvent('page'),
                            link.click()
                        ])
             //collect single page and pass it to array
           allPages.push(childpage);   
}

/*
//calculate total pages
let totalPages:Page[]=context.pages();
console.log("Total pages open: "+totalPages.length);

for(let p of totalPages)
{
   await p.bringToFront();
    console.log("Title is: "+await p.title());
    console.log("Url is: "+p.url());
        
}
*/

console.log("Total pages: "+allPages.length);
for(let p of allPages)
{
    await p.bringToFront();
    console.log("Title: "+await p.title());
    
}

await page.waitForTimeout(1000);

await selectSpecificWindow(allPages,"Facebook");

await page.waitForTimeout(1000);

await selectSpecificWindow(allPages,'YouTube');


await page.waitForTimeout(3000);


})


//reusable method
async function selectSpecificWindow(allpages:Page[],pageTitle:string):Promise<void>
{
    for(let p of allpages)
    {
        if((await p.title()).includes(pageTitle))
        {
            await p.bringToFront();
            await p.waitForTimeout(1500);
            break;


        }
    }

}