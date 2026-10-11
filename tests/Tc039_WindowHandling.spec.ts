
import {test,expect, chromium, Browser, BrowserContext, Page} from "@playwright/test";

test("Test for open New Tab in PW",async({})=>{

let browser:Browser=await chromium.launch({headless:false,channel:'msedge'});

//browser-->context
let context1:BrowserContext=await browser.newContext();

//tab1
let page1:Page=await context1.newPage();
//tab2
let page2:Page=await context1.newPage();

await page1.goto("https://www.saucedemo.com/");
await page1.getByPlaceholder("Username").fill("standard_user");
await page1.getByPlaceholder("Password").fill("secret_sauce");
await page1.getByRole('button',{name:'Login'}).click();


await page2.goto("https://www.saucedemo.com/");
await page2.getByPlaceholder("Username").fill("problem_user");
await page2.getByPlaceholder("Password").fill("secret_sauce");
await page2.getByRole('button',{name:'Login'}).click();

await page1.waitForTimeout(4000);

})

test.only("Test for Window Handling",async({})=>{

let browser:Browser=await chromium.launch({headless:false,channel:"msedge"});

//browser--->context
let context1:BrowserContext=await browser.newContext();

//context-->page
let page:Page=await context1.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");//home page


//window handling: start event and perform click action works in parallel
let [childpage]=await Promise.all([
                        //we will fire event which monitors context
                        context1.waitForEvent('page'),
                        //action
                        page.getByRole('link',{name:"OrangeHRM, Inc"}).click()//new page will open
                        ])


//how many total pages are open
//pages():Returns all open pages in the context.
let allpages:Page[]=context1.pages();
console.log("Total pages open: "+allpages.length);//2

//activate tab[parent tab/child tab]
//Brings page to front (activates tab).
await childpage.bringToFront();

await childpage.locator("//button[text()='Contact Sales']").first().click();

//activate parent page
await page.bringToFront();

await page.getByPlaceholder("Username").fill("Admin");


await page.waitForTimeout(2000);

})