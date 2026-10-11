

import {test,BrowserContext,Page} from "@playwright/test"

test("starts browser-->context--->page",async({browser})=>{

//browser---> newContext(): Creates a new browser context. It won't share cookies/cache with other browser contexts.
let context1:BrowserContext=await browser.newContext();

//context1--->open tab & google app
let page1:Page=await context1.newPage();//Creates a new page in the browser context.

//page-->app
await page1.goto("https://www.google.com");


//context2:
let context2:BrowserContext=await browser.newContext();

//open tabs: page
let page2:Page=await context2.newPage();

//tab-->appfacebook
await page2.goto("https://www.facebook.com");

await page2.waitForTimeout(3000);

})

test("Browser-->context--->2tabs",async({browser})=>{

    //browser--->open context
    let context:BrowserContext=await browser.newContext();

    //context--->page1
    let page1:Page=await context.newPage();

    let page2:Page=await context.newPage();

    await page1.goto("https://www.facebook.com");
    await page2.goto("https://www.amazon.in");

    await page2.waitForTimeout(3000);
})