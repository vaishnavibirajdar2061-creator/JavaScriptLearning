
import {test} from "@playwright/test"
import {attachScreenshot} from "./Generics/AppUtil.js"
//page: Isolated Page instance, created for each test.
test("Test for CRM app launch",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/");
    attachScreenshot(page,test);
    console.log("Title is: "+await page.title());
    console.log("Current url: "+page.url());
    
    

})