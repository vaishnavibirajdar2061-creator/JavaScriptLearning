

import {test,expect, Locator} from "@playwright/test";

test("Test for xpath methods",async({page})=>{
//open app
await page.goto("https://www.amazon.in/");

//click on Sell: xpath with text()
await page.locator("//a[text()='Sell']").click();

//cart: xpath with normalize-space()
await page.locator("//span[normalize-space()='Cart']").last().click();

//cart message
let message:string=await page.locator("//h3").first().innerText();
expect(message).toContain("empty");
console.log("Cart message: "+message);


//search for watch: xpath with contains()
let searchBox:Locator=page.locator("//input[contains(@id,'searchtext')]");

//fill
await searchBox.fill('watch');
//press key
await searchBox.press('Enter');

await page.waitForTimeout(1500);

//clear the text
await searchBox.clear();

//search for iphone xpath with starts-with()
searchBox=page.locator("//input[starts-with(@id,'two')]");
await searchBox.fill("iphone");
await searchBox.press('Enter');


await page.waitForTimeout(2000);



})