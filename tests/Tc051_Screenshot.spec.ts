

import {test,expect} from "@playwright/test"

test("Test for Screenshot",async({page})=>{


await page.goto("https://www.amazon.in");

await page.waitForTimeout(2000);

let timestamp=new Date().getTime();

//simple screenshot
await page.screenshot({path:"Screenshots/AmazonHomepage"+timestamp+".png"})


//full page
await page.screenshot({path:"Screenshots/AmazonFullPage"+timestamp+".png",fullPage:true})

//Manually  we are attaching screenshot in report
let screenshotReport=await page.screenshot({fullPage:true});
test.info().attach("AmazonAppFullPage",{
    body:screenshotReport,
    contentType:'image/png'
})



})