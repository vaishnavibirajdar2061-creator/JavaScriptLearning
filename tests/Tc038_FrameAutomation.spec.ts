

import {test,expect, FrameLocator, Frame} from "@playwright/test";

test("Test for Simple/Nested Frame automation",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

//await page.locator("input[name='mytext1']").fill("Hello All!"); wont execute as element is inside frame


//frame-->element
// let frame1:FrameLocator=page.frameLocator("//frame[@src='frame_1.html']");
// await frame1.locator("input[name='mytext1']").fill("Hello All!");

//frame1
await page.frameLocator("//frame[@src='frame_1.html']").locator("input[name='mytext1']").fill("Hello");

//frame2--->input[name='mytext2']
await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']").fill("Hi...");

//frame3--->input
await page.frameLocator("frame[src='frame_3.html']").locator("input[name='mytext3']").fill("Welcome...");

//frame3--->iframe-->element
let innerFrame=page.frameLocator("frame[src='frame_3.html']").frameLocator("//iframe");

//from innerframe--->3radio button-->check on 2nd
await innerFrame.locator("div.zwllIb").nth(1).click();

await page.waitForTimeout(2000);
})



test("Nested frame automation",async({page})=>{

    await page.goto("https://selectorshub.com/iframe-scenario/");

    //frame1-->ele
    let frame1=page.frameLocator("(//iframe[@id='pact1'])[1]");
    await frame1.locator("#inp_val").fill("Selenium");

    //frame1--->frame2-->input
    let frame2=frame1.frameLocator("(//iframe[@id='pact2'])[1]");
    await frame2.locator("#jex").fill("Playwright");

    //frame2-->frame3-->input
    await frame2.frameLocator("(//iframe[@id='pact3'])[1]").locator("#glaf").fill("AI Automation");
    await page.waitForTimeout(2000);
})


test.only("Find Total frames",async({page})=>{

    await page.goto("https://selectorshub.com/iframe-scenario/");

    //An array of all frames attached to the page.
    let allFrames:Frame[]=page.frames();
    console.log("Total frames are: "+allFrames.length);//7

    //for every frame get the name of frame or url
    /*
    name():string-Returns frame's name attribute as specified in the tag.

    url():string=Returns frame's url.
    */
for(let frame of allFrames)
{
    console.log(frame.name());
    console.log(frame.url());
    
    
}


})