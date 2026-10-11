

import {test,expect} from "@playwright/test"



test("Test for maximize screen",async({page})=>{


    /*const size=await page.evaluate(()=>({
        width: window.screen.availWidth,
        height:window.screen.availHeight
    }));

    await page.setViewportSize(size);*/

    await page.goto("https://www.google.com");
    await page.waitForTimeout(2000);
})