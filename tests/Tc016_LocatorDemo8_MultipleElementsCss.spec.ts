

import {test,expect,Locator} from "@playwright/test";


test("Multiple elements using cssSelector allInnerTexts()",async({page})=>{


    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //get the text of element and print in console
   let allTexts:string[]=await page.locator("div.list-group>a").allInnerTexts();
   console.log("Total options are: "+allTexts.length);
   

   for(let i of allTexts)
   {
    console.log(i);
    
   }



await page.waitForTimeout(2000);

})

test("Multiple Elements with all()",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //get the text of element and print in console and find Forgotten Password and perform click
    let allOptions:Locator[]=await page.locator("div.list-group>a").all();

    console.log("Total Options are: "+allOptions.length);

    for(let i of allOptions)
    {
        console.log(await i.innerText());

        if((await i.innerText()).includes("Forgotten Password"))
        {
            console.log("Expected option found!");
            //click
            await i.click();
            break;
        }
        
    }
    
await page.waitForTimeout(2000);


})



test.only("Single element from multiple match with cssindex",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

await page.locator("div.list-group>a:nth-child(3)").click();

await expect(page).toHaveURL(/forgotten/);

await page.waitForTimeout(2000);


})