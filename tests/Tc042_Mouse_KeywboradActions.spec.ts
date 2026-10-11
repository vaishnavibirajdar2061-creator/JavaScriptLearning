

import {test,expect, Locator} from "@playwright/test"


test("Test for Right click Action",async({page})=>{


page.on('dialog',async(alertBox)=>{
console.log("Alert type is: "+alertBox.type());
console.log("Alert text is: "+alertBox.message());

//ok
await alertBox.accept();


})



await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

//rightclick
await page.getByText("right click me").click({button:'right'});

//get the menu
let allOptions:Locator[]=await page.locator("ul.context-menu-list>li>span").all();

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes('Copy'))
    {
        //click
        await i.click();//alert will appear
        break;
    }
    
    
}

await page.waitForTimeout(2000);

})


test("Test for DoubleClick action",async({page})=>{

page.on('dialog',async(alertBox)=>{
console.log("Type of Alert is: "+alertBox.type());
console.log("Alert text is: "+alertBox.message());

//ok
await alertBox.accept();


})

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await page.getByRole('button',{name:'Double-Click Me To See Alert'}).dblclick();

    await page.waitForTimeout(2000);
})



test("Test for Mouse hover",async({page})=>{

    await page.goto("https://www.naukri.com/");

//mouse hover on Jobs
await page.getByText("Jobs").first().hover();

let allOptions:Locator[]=await page.locator("div.nI-gNb-Jobs>ul>li>a").all();

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes("MNC jobs"))
    {
        await i.click();
        break;
    }
    
}


await page.waitForTimeout(2000);
})

test("Test for drag and drop scenario ",async({page})=>{

await page.goto("https://jqueryui.com/droppable/#default");

//element is inside frame
let frame1=page.frameLocator("iframe.demo-frame");

let srcElement=frame1.locator("#draggable");
let targetElement=frame1.locator("#droppable");

//dragTo():Promise<void>: Drag the source element towards the target element and drop it.
await srcElement.dragTo(targetElement);

await page.waitForTimeout(2000);
})


//keyboard operations
test("Test for Copy and paste scenario",async({page})=>{

    /*
    Windows
    -----------
    Control+A : select entire text
    Control+C : Copy
    Control+V :paste

    Mac
    ------------
    Meta+A: select All
    Meta+C: copy
    Meta+V: paste

    common solution
    ------------------
    ControlOrMeta+A: select all
    ControlOrMeta+C: Copy
    ControlOrMeta+V: paste

    */
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//username
let username:Locator=page.getByPlaceholder("Username");

await username.fill("Admin");
//select data
await username.press("ControlOrMeta+A");
//copy data
await username.press("ControlOrMeta+C");

//password
let passwordEle:Locator=page.getByPlaceholder("Password");
await passwordEle.press("ControlOrMeta+V");

//await passwordEle.press("Digit1Digit2Digit3");

//get the entered data from text box: inputValue()
console.log("Paste value is: "+await passwordEle.inputValue());


await page.waitForTimeout(2000);

})


test("Test for Registartion feature with keyboard commands",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

//username
await page.getByPlaceholder("First Name").pressSequentially("Kiran",{delay:1000});
//lastname
await page.keyboard.press('Tab');
await page.keyboard.type("Sharma");
//email
await page.keyboard.press('Tab');
let time=new Date().getTime();
let email="kiran2026"+time+"@gmial.com";
await page.keyboard.type(email);
//telephone
await page.keyboard.press('Tab');
await page.keyboard.type("7907098");
//password
await page.keyboard.press('Tab');
await page.keyboard.type("test123");
//confirm password
await page.keyboard.press('Tab');
await page.keyboard.type("test123");

await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');

//checkbox
await page.locator("input[name='agree']").check();
await page.keyboard.press('Tab');
await page.keyboard.press('Enter');



await page.waitForTimeout(2000);
})