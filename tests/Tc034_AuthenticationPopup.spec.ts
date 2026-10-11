

import {test,expect,chromium,Browser,BrowserContext,Page} from "@playwright/test";

test("Test for authentication popup way1",async({page})=>{

    /*
    If you dont share your credentials
    Error: page.goto:
     net::ERR_INVALID_AUTH_CREDENTIALS at https://the-internet.herokuapp.com/basic_auth

     Manually
     -----------------
     https://username:password@domain
    */
await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

console.log(await page.locator("div.example").innerText());

await page.waitForTimeout(2000);

})

test("Test for authentication popup with real password format(abc12@3**)",async({})=>{

    let browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

    //browser-->context-->setup
    let context:BrowserContext=await browser.newContext({httpCredentials:{
        username:"admin",
        password:"admin"
    }})

    //context-->page--->request
    let page:Page=await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    console.log(await page.locator("div.example").innerText());

    await page.waitForTimeout(2000);

})