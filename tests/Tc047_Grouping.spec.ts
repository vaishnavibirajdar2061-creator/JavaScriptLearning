
/*
 Test group/Test Suite
 ---------------------
 -group the test cases
 -collection of test cases

 In Playwright we use test.describe() and within this function add test cases

*/


import {test,expect} from "@playwright/test";

//serial:Declares a group of tests that should always be run serially. 

test.describe.serial("This is suite1",()=>{


    test("Test for google app",async({page})=>{
        await page.goto("https://www.google.com");
        console.log("Title is: "+await page.title());
        })


    test("Test for facebook app",async({page})=>{
        await page.goto("https://www.facebook.com");
        console.log("Title is: "+await page.title());
        })

    test("Test for Amazon app",async({page})=>{
        await page.goto("https://www.amazon.in");
        console.log("Title is: "+await page.title());
        })










})

/*test.describe("This is suite2",()=>{


    test("Test for google app",async({page})=>{
        await page.goto("https://automationplayground.com/crm/");
        console.log("Title is: "+await page.title());
       await expect(page).toHaveTitle("CRM");
        })



})*/