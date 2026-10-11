

import {test,expect,Locator} from "@playwright/test";


test("Test for Page scroll",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

  
    //scroll down
   await page.evaluate(()=>{
     //window.scrollTo(0,6000);
     window.scrollTo(0,document.body.scrollHeight);
   })

    await page.waitForTimeout(2000);

   //scroll up
   await page.evaluate(()=>{
    window.scrollTo(document.body.scrollHeight,0);
   })

    await page.waitForTimeout(2000);

    //scroll upto ay webelement
    let element:Locator=page.getByRole('heading',{name:"Static Web Table",level:2});
    await element.scrollIntoViewIfNeeded();
 
    await page.waitForTimeout(2000);
})