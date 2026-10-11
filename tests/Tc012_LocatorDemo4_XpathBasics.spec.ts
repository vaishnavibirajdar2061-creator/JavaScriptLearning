

import {test,expect} from "@playwright/test"

test("Test for login with xpath",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email id with xpath
    await page.locator("//input[@name='email']").fill("test2525@gmail.com");

    //password with xpath
    await page.locator("//input[@type='password']").fill("test123");
 
    //login button with xpath
    await page.locator("//input[@value='Login']").click();

    //assert
    await expect(page).toHaveTitle("My Account");
    console.log("User login is completed!");
    
await page.waitForTimeout(2000);
})