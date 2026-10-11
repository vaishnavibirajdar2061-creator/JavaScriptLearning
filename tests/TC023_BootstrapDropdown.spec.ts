

import {test,expect,Locator, Page} from "@playwright/test"

test("Test forbootstrap dropdown",async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    //click 
    await page.locator("div#selectOne").click();
    let allOptions:Locator[]=await page.locator("//div[contains(@id,'listbox')]//div[contains(@id,'react-select')]").all();
    console.log("Total options are: "+allOptions.length);//7

    for(let option of allOptions)
    {
        console.log(await option.innerText());
        if((await option.innerText()).includes("Prof."))
        {
            await option.click();
            break;
        }
        
    }

    await page.waitForTimeout(2000);
})


test("Test for Redbus application dropdownAutomation",async({page})=>{

await page.goto("https://www.redbus.in/");

//from
await page.locator("#srcinput").fill("Pune");

await page.waitForTimeout(1000);

let allOptions:Locator[]=await page.locator("div[class^='searchCategory']>div[class^='listItem'] div[role='heading']").all();
console.log("Total options are: "+allOptions.length);

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes("Wakad"))
    {
        await i.click();
        break;
    }
    
}


await page.waitForTimeout(2000);
})


test("Test for Redbus application dropdownAutomation with filter()",async({page})=>{

await page.goto("https://www.redbus.in/");

//from
await page.locator("#srcinput").fill("Pune");

await page.waitForTimeout(1000);
let allOptions:Locator=page.locator("div[class^='searchCategory']>div[class^='listItem'] div[role='heading']");
console.log("Total options are: "+allOptions.count());//20

//wakad
await allOptions.filter({hasText:"Wakad"}).first().click();

await page.waitForTimeout(2000);
})



test.only("Automate jquerydropdown",async({page})=>{

    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

    await page.getByRole('textbox',{name:"Select"}).first().click();

    let allOptions:Locator=page.locator("(//div[@class='comboTreeDropDownContainer'])[1]//li/span[@class='comboTreeItemTitle']");
    console.log("Total Options: "+await allOptions.count());
    
    await selectOptions(page,["choice 1","choice 4","choice 6 2 1"]);

    //allOptions.filter({hasText:"choice 1"}).click();


    // let allOptions:Locator[]=await page.locator("(//div[@class='comboTreeDropDownContainer'])[1]//li/span[@class='comboTreeItemTitle']").all();
    // console.log("Total options are: "+allOptions.length);

    // for(let i of allOptions)
    // {
    //     if((await i.innerText()).includes("choice 1") || (await i.innerText()).includes("choice 4")||(await i.innerText()).includes("choice 6 2 1"))
    //     {
    //         await i.click();
    //         //break;
    //     }
    // }
    
await page.waitForTimeout(2000);
})


//function

async function selectOptions(page:Page,choices:string[]):Promise<void>
{
    for(let choice of choices)
    {
       await page.locator("(//div[@class='comboTreeDropDownContainer'])[1]//li/span[@class='comboTreeItemTitle']").filter({hasText:`${choice}`}).first().click();
    }
}