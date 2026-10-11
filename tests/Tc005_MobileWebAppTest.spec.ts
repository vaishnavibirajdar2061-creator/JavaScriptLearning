


import {test} from "@playwright/test"

test("Test application on Mobile viewport",async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("PlaywrightUser");

    //wait
    await page.waitForTimeout(2000);
})