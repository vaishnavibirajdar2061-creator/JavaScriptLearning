


import {test,expect} from "@playwright/test"


test("Test for datepicker with given format",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/datepicker");

   await page.locator("#datepicker").fill("09/24/2026");

    await page.waitForTimeout(2000);

})


test("Test for datepicker as per user choice",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/datepicker");

    //open calendar
   await page.locator("#datepicker").click();

   //expectation
   let day="20";
   let month="April";
   let year="2027";

   //month selection
   while(true)
   {
   let text=await page.locator("th.datepicker-switch").first().innerText();
 //console.log(text);
 let actMonth=text.split(" ")[0];
 let actYear=text.split(" ")[1];

 if(actMonth===month && actYear===year)
 {
    //month match
    break;
 }else
 {
    //click on arrow
    await page.locator("th.next").first().click();
 }
}

   //date selection
page.locator("td.day").filter({hasText:`${day}`}).click();

    await page.waitForTimeout(2000);

})