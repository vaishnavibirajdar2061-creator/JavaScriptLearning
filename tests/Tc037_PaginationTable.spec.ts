

import {test,expect, Locator} from "@playwright/test";
import { log } from "console";

test("Test for Pagination table",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.getByRole('heading',{name:"Pagination Web Table",level:2}).scrollIntoViewIfNeeded();

//get the number of pages and as per pages find number rows and columns
let allPages:Locator[]=await page.locator("//ul[@id='pagination']//a").all();
console.log("Total pages: "+allPages.length);

for(let p of allPages)
{
    console.log("For page number: "+await p.innerText());

    //open page
    await p.click();   
    //row
    let rows:number=await page.locator("//table[@id='productTable']//tbody//tr").count();
    console.log("Total Rows: "+rows);

    //cell
    let cells:number=await page.locator("//table[@id='productTable']//tbody//tr[1]/td").count();
    console.log("Total Coloum: "+cells);

}
console.log("-----------------");
/*
//find product Soundbar 
for(let p of allPages)
{
    //open page
    await p.click();

    //get the allproduct
    await page.locator("//table[@id='productTable']//tbody//tr/td[2]").filter({hasText:"Soundbar"}).highlight();
        break;
}
*/

for(let p of allPages)
{
    if((await p.innerText()).includes("3"))
    {
    //open page
    await p.click();
   
  await page.waitForTimeout(1500);
let allProducts:Locator[]=await page.locator("//table[@id='productTable']//tbody//tr/td[2]").all();
await page.waitForTimeout(1500);

for(let product of allProducts)
{
    if((await product.innerText()).includes('Fitness Tracker'))
    {
    console.log("Product found at Page: "+await p.innerText());
    
    //check the checkbox
    await page.locator("//td[text()='Fitness Tracker']//following-sibling::td/input[@type='checkbox']").check();
    break;
    }
}
break;

    }
}






await page.waitForTimeout(3000);


})