


import {test,expect,Locator} from "@playwright/test";

test("Test for openCart menu",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/forgotten");
    let allOptions:Locator[]=await page.locator("//div[@class='list-group']/a").all();
    console.log("Total Options are "+allOptions.length);

    for(let i of allOptions)
    {
        console.log(await i.innerText());
        
    }



})

test("Test for Google search",async({page})=>{


    await page.goto("https://www.google.com/");

    await page.locator("#APjFqb").fill("jenkins");
    await page.waitForTimeout(1000);

let allOptions:Locator[]=await page.locator("//ul[@role='listbox']/li").all();
console.log("Total search options are: "+allOptions.length);

for(let i of allOptions)
{
    console.log(await i.innerText());
    
}


})


test.only("Test for Opencart footers",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    let allFooters:Locator[]=await page.locator("//footer//a").all();
    console.log("Total footer links are: "+allFooters.length);

    for(let i of allFooters)
    {
        console.log(await i.innerText());

        if((await i.innerText()).includes("My Account"))
        {
            console.log("Option found!");
            await i.click();
            break;
            
        }
        
    }
    
})