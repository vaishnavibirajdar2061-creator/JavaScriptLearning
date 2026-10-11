

import {test,chromium,Browser, Page} from "@playwright/test"

test("Launch Chrome Browser",async({})=>{

//open browser
let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

//browser--->newPage(tab)
let page:Page=await browser.newPage();

//open app
await page.goto("https://www.facebook.com");

//get thetitle
console.log("Title is: "+await page.title());

//close browser
await page.close();








})