

import {test,expect,Locator} from "@playwright/test"
import { log } from "console";


test("Test for static web table",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

//scroll the page
page.getByRole("heading",{name:"Static Web Table",level:2}).scrollIntoViewIfNeeded();

//heading and columns
let allHeadings:Locator[]=await page.locator("//table[@name='BookTable']/tbody/tr[1]//th").all();
console.log("Total headings are: "+allHeadings.length);//4
console.log("Total columns are: "+allHeadings.length);//4

//print the heading
for(let heading of allHeadings)
{
    console.log(await heading.innerText());
    
}


//rows
let numberOfRows:number=await page.locator("//table[@name='BookTable']/tbody/tr").count();
console.log("Number of rows: "+numberOfRows);//7

console.log("-----------");
//specific row 
let rowData:string[]=await page.locator("//table[@name='BookTable']/tbody/tr[5]/td").allInnerTexts();

await page.locator("//table[@name='BookTable']/tbody/tr[5]/td").highlight();
for(let data of rowData)
{
    console.log(data);
    
}
console.log("-----------");
//specific column: column 2
let columnData:string[]=await page.locator("//table[@name='BookTable']/tbody/tr/td[2]").allInnerTexts();

await page.locator("//table[@name='BookTable']/tbody/tr/td[2]").highlight();

for(let data of columnData)
{
    console.log(data);
    
}

console.log("------------");

//entire data of table to print

let allData:string[]=await page.locator("//table[@name='BookTable']/tbody/tr/td").allInnerTexts();
for(let data of allData)
{
    console.log(data);
    
}

console.log("-----------");
//calculate total books price

let allPrice:string[]=await page.locator("//table[@name='BookTable']/tbody/tr/td[4]").allInnerTexts();
let total=0;

for(let price of allPrice)
{
    total=total+Number(price);
}

console.log("Total Books cost: "+total);



await page.waitForTimeout(2000);

})