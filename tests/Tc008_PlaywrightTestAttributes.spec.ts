
import {test} from "@playwright/test"


test("Test for Google",async({page})=>{

    await page.goto("https://www.google.com",{timeout:4000,waitUntil:'domcontentloaded'});

    console.log("Titlw is: "+await page.title());
    

})

test("Test for facebook",async({page})=>{

    await page.goto("https://www.facebook.com");

    console.log("Titlw is: "+await page.title());
    

})


test.skip("Test for amazon",async({page})=>{

    await page.goto("https://www.amazon.com",{waitUntil:'domcontentloaded'});

    await page.waitForLoadState('domcontentloaded',{timeout:5000});

    await page.waitForTimeout(2000);
    console.log("Title is: "+await page.title());

    await page.waitForTimeout(2000);
    

})