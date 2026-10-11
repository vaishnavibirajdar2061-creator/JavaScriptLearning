
/*
Hooks
-------------
Hooks for attaching preconditions and postconditions in Playwright
1.beforeAll
2.afterAll
3.beforeEach
4.afterEach
*/

import {test,expect} from "@playwright/test"
import { log } from "console";

test.beforeAll(()=>{
    console.log("BeforeAll executes one time before all test");
    
})

test.afterAll(()=>{
    console.log("afterAll executes one time after all test");
    
})

    test.beforeEach(()=>{
        console.log("BeforeEach will exeucte before every single test case");
        
    })

     test.afterEach(()=>{
        console.log("AfterEach will exeucte after every single test case");
        
    })


    test("Test for Google app",async({page})=>{
        await page.goto("https://www.google.com");
        console.log("Title is: "+await page.title());
        })


    test("Test for facebook app",async({page})=>{
        await page.goto("https://www.facebook.com");
        console.log("Title is: "+await page.title());
        })

    test("Test for CRM app",async({page})=>{
        await page.goto("https://automationplayground.com/crm/");
        console.log("Title is: "+await page.title());
      
        })