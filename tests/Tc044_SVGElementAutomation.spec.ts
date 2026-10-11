
import {test,expect, Locator} from "@playwright/test"


test("Test for SVG element automation",async({page})=>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(2000);
    let allLinks:Locator[]=await page.locator("//*[local-name()='svg']").all();
    console.log("Total links: "+allLinks.length);

    for(let link of allLinks)
    {
        await link.click();
    }

    await page.waitForTimeout(2000);
    
})

test("Test for PetParasite map ",async({page})=>{

    await page.goto("https://petdiseasealerts.org/forecast-map#/");

    await page.waitForTimeout(2000);

    //frame
    let frame1=page.frameLocator("iframe[id^='map-instance']");

    //frame-->map rigion
    let allRigions:Locator[]=await frame1.locator("g#regions>g").all();
    console.log("Total rigions are: "+allRigions.length);

    for(let i of allRigions)
    {
        console.log(await i.getAttribute('id'));
        
    }


    await page.waitForTimeout(2000);
})