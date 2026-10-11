

import {test,expect, Locator} from "@playwright/test"


test("Test for title using Javascript command",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    console.log("Title is: "+await page.title());
    

    //Using js
    let appTitle=await page.evaluate(()=>{
                        return document.title;
                        })

        console.log("Title using Js: "+appTitle);
        

})

test("Test for page refresh",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

 //refresh page
 await page.reload();

 await page.waitForTimeout(2000);

 //using Js
 page.evaluate(()=>{
    window.history.go();
 })

await page.waitForTimeout(2000);
})

test("Using js command perfrom actions on webelement",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");
    
    //firstname
   await page.evaluate(()=>{
        let fname=document.querySelector("#first-name") as HTMLInputElement;
        fname.value="Priyanka";
    })

    //job title
    await page.evaluate(()=>{
        let jobTitle=document.querySelector("input[placeholder='Enter your job title']") as HTMLInputElement;
        jobTitle.value="SDET";
    })

    //click
    await page.evaluate(()=>{
        let radiobutton=document.querySelector("#radio-button-1") as HTMLInputElement
        radiobutton.click();
    })

await page.waitForTimeout(2000);

})


test("Test for hidden element automation",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

    //lets hide the element
    await page.locator("#hide-textbox").click();

    //this element will be hidden and pw will not identify it so we need Js command
   //await page.getByPlaceholder("Hide/Show Example").fill("Testing...");

   //using Js automate hidden element
   await page.evaluate(()=>{
    let ele=document.querySelector("#displayed-text") as HTMLInputElement;
    ele.value="Hello Testing....";
   })

   //show
   await page.locator("#show-textbox").click();



await page.waitForTimeout(2000);
})


test.only("Test for Disable element",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");

let element:Locator=page.getByPlaceholder("Enabled/Disabled Field");
console.log("Current element status Is element enabled?: "+await element.isEnabled());//true

//lets make element disable
await page.locator("#disabled-button").click();

console.log("After disable element status Is element enabled?: "+await element.isEnabled());//false
console.log("Is element disable?: "+await element.isDisabled());//true

//perform action
//await element.fill("testing...");

//disable elements we can automate using Js command
await page.evaluate(()=>{
    let ele=document.querySelector("#enabled-example-input") as HTMLInputElement;
    ele.value="Hello All";
})

await page.waitForTimeout(2000);
})