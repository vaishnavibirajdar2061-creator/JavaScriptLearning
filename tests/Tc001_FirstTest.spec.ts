
import {test} from "@playwright/test";


test("Test for application launch",async({page})=>{

    //open application
    await page.goto("https://www.google.com");

    //static wait in PW: waitForTimeout: used for debugging : Waits for the given timeout in milliseconds.
    await page.waitForTimeout(2000);


})