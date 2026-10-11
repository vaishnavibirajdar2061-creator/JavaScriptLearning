

import {test,expect, Locator} from "@playwright/test"



test("Test for filter() automate footerscenario",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?");

let allFooters:Locator=page.locator("footer a");
console.log("Total Footers are: "+await allFooters.count());

//filter
await allFooters.filter({hasText:'Brands'}).first().click();

await page.waitForTimeout(2000);
})



test("Test for Amazon search with filter()",async({page})=>{

    await page.goto("https://www.amazon.in/");

    await page.locator("#twotabsearchtextbox").fill("MacBook");

    await page.waitForTimeout(1000);
    
    let allOptions:Locator=page.locator("div.s-suggestion>span.s-heavy");
    console.log("Total search options: "+await allOptions.count());

    await allOptions.filter({hasText:"air m5 13+ inch"}).click();
    

    await page.waitForTimeout(2000);
})