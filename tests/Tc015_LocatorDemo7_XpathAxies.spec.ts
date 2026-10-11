

import {test,expect} from "@playwright/test";
import { log } from "console";

test("Test for Xpath axies",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/customers.html?email-name=test%40gmail.com&password-name=sadsdsda&submit-name=");

//get the ancestor tag for John element
await page.locator("//td[text()='John']//ancestor::tbody").highlight();

//get the all child tag for row 3
let totalChilds:number=await page.locator("//tbody/tr[3]//child::td").count();
console.log("Total child tags under row3: "+totalChilds);//5

//hightligh parent tag of John
await page.locator("//td[text()='John']//parent::tr").highlight();

//get the total rows following John
let frows:number=await page.locator("//td[text()='John']//following::tr").count();
console.log("Total rows Following John:  "+frows);//2

//get the total rows preceding John
let prows:number=await page.locator("//td[text()='John']//preceding::tr").count();
console.log("Total rows preceding John: "+prows);//4

//get the following siblings
await page.locator("//td[text()='John']//following-sibling::td").highlight();

//get the preceding sibling
await page.locator("//td[text()='John']//preceding-sibling::td").highlight();


await page.waitForTimeout(2000);
})