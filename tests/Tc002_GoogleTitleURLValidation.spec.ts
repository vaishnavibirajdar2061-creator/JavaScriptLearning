

import {test,expect} from "@playwright/test";
/*
For assertion in PW we use expect()
*/

test("Test for google title validation",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    //get the current page title
    let appTitle:string=await page.title();
    console.log("Application title is: "+appTitle);

    //validate title based on store data into variable : automwait of 5sec not applicable
    expect(appTitle).toBe("Google");
    console.log("Title matched!");

    //validate title based on page level: pw autowait 5 sec for assertion applicable here
    await expect(page).toHaveTitle("Google");
    console.log("Page Title matched!");
  
    /*
    if(appTitle==="Google")
    {
        console.log("Title matched...Test pass");
        
    }
    else{
        console.log("Title not matched...Test Pass");
        
    }
    */


})



test("Test for Google url",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    console.log("Application Title: "+await page.title());
    console.log("Application Url: "+page.url());

    //validate page URL full match
    await expect(page).toHaveURL("https://www.google.com/");
    console.log("Full url matched!");
    
    //validate page URL partial match
    await expect(page).toHaveURL(/google/);
    console.log("Partial url matched!");
    
    

})