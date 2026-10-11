

import {test,expect} from "@playwright/test"

test("Test for Navigation",async({page})=>{

    //open app
    await page.goto("https://www.google.com");
    console.log("Application title: "+await page.title());

    await page.waitForTimeout(1000);
    
    //facebook app in same session
    await page.goto("https://www.facebook.com");
    console.log("Application title: "+await page.title());
    
    //goback
    await page.goBack();
    await expect(page).toHaveTitle("Google");

    await page.waitForTimeout(1000);

    //goforward
    await page.goForward();
    await expect(page).toHaveTitle("Facebook");

     await page.waitForTimeout(1000);

    //refresh
    await page.reload();

await page.waitForTimeout(2000);

})