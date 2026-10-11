

import {test,expect} from "@playwright/test"

test("Test for open cart login functionality",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email id: tagname with id
    await page.locator("#input-email").fill("test2525@gmail.com");

    //password: tagname with attribute
    await page.locator("input[name='password']").fill("test123");

    //login button: tagname with classname
    //await page.locator("input.btn.btn-primary").click();

    //login Button with tagname classname and attribute
    await page.locator("input.btn.btn-primary[value='Login']").click();

    //assertion on title: toHaveTitle(): Ensures the page has the given title.
    await expect(page).toHaveTitle("My Account");
    console.log("Login completed!");

    //assertion on url
    await expect(page).toHaveURL(/account/);
    console.log("User Navigated to account page!");
    
    

})