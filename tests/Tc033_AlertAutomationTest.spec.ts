

import {test,expect} from "@playwright/test"

test("Test for simple alert which is autodismissed by playwright",async({page})=>{

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    await page.getByText("Log In").click();

    //alert will appear and auto disimssed by playwright

    await page.locator("input.email-input").fill("Priyanka");

    await page.waitForTimeout(2000);
})

test("Test for simple alert using page.on listenar",async({page})=>{


    //listener alttached before alert window appear
    page.on('dialog',async(alertBox)=>{

        console.log("Alert type is: "+alertBox.type());
        console.log("Alert message is: "+alertBox.message());

        //ok
        await alertBox.accept();
    })



    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    await page.getByText("Log In").click();

    //alert will appear and handled by our script

    await page.locator("input.email-input").fill("Priyanka");

    await page.waitForTimeout(2000);
})

test("Test for simple alert of internet app using page.on listener",async({page})=>{

page.on('dialog',async(alertBox)=>{

    console.log("Alert type is: "+alertBox.type());
    console.log("Alert message is: "+alertBox.message());

    //OK
    await alertBox.accept();
    
    
})



await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.getByText("Click for JS Alert").click();


//assertion
await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
console.log("Simple alert automated!");

await page.waitForTimeout(2000);

})

test("Test for Confirmation alert which is autodismissed by playwright",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.getByText("Click for JS Confirm").click();

//alert will appear and auto dismissed by playwright by cliking on cancel

await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
console.log("Confirmation alert automated!");

await page.waitForTimeout(2000);

})

test("Test for Confirmation alert using page.on listener",async({page})=>{

page.on('dialog',async(alertBox)=>{
console.log("Alert type is: "+alertBox.type());
console.log("Alert message is: "+alertBox.message());

//cancel
await alertBox.dismiss();

})


await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.getByText("Click for JS Confirm").click();

//alert will appear and handled by our logic

await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
console.log("Confirmation alert automated!");

await page.waitForTimeout(2000);

})


test("Test for prompt alert using page.on listener",async({page})=>{

    page.on("dialog",async(alertBox)=>{
    console.log("Alert type is: "+alertBox.type());
    console.log("Alert message is: "+alertBox.message());

    //prompt
    await alertBox.accept("Hello");
    
    })


await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.getByText("Click for JS Prompt").click();


//assertion
await expect(page.locator("#result")).toHaveText("You entered: Hello");
console.log("Prompt alert automated!");



})