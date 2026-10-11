
import {test,expect} from "@playwright/test"


test("Test for ShadowdomElements",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //scroll upto element
    await page.getByRole('heading',{name:"ShadowDOM",level:2}).scrollIntoViewIfNeeded();


    //Mobiles text
    let text1:string=await page.locator("#shadow_content").innerText();
    console.log("Text1 is : "+text1);

    //Laptops: is available inside nested dom
    let text2=await page.locator("#nested_shadow_content").innerText();
    console.log("Text2 is: "+text2);
    
    //blog link
    await page.getByRole('link',{name:'Blog'}).last().click();

    //come back to main page

    //automate textbox,checkbox,filechooser,youtube link
    
    await page.waitForTimeout(2000);

})

test("Test for Closed shadow Dom",async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");


    await page.getByRole('heading',{name:"6 · Closed Shadow DOM",level:2}).scrollIntoViewIfNeeded();
    
    /*
    As element is inside closed dom 
    you will get Error: locator.fill: Test timeout of 30000ms exceeded.
    */
    await page.locator("#closed-input").fill('Hello all');

await page.waitForTimeout(2000);
})