

import {Locator, test} from "@playwright/test"


test("Test for Google basic search",async({page})=>{

await page.goto("https://www.google.com/");

//Stratrgy1: Identify + Validation + Action
let searchBox:Locator=page.locator("#APjFqb");

//validation
console.log("Is element is visible?: "+await searchBox.isVisible());
console.log("Is element is enabled?: "+await searchBox.isEnabled());
console.log("Is element is editable?: "+await searchBox.isEditable());

//action
await searchBox.fill("Playwright");
await page.waitForTimeout(1000);
await searchBox.clear();


//Stratrgy2: Identify + Action
await page.locator("#APjFqb").fill("Selenium");

    
//pause
await page.waitForTimeout(2000);
})