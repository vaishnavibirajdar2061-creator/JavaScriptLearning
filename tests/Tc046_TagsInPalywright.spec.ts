
/*
Tags
============
- Tags will help you to segreegate your test as per type/functionality
- In playwright we can add tag test case level using @ symbol
@smoke, @regression, @functional

- to execute all @smoke test cases from project we use tags

- any test case design with tag then use grep command to execute that test case

Syntax
---------
npx playwright test --grep "@tag"

1.To excute single test
--grep '@regression'

2. To execute multiple tag at a time
--grep '@regression|@smoke'

3. To ignore any tag
--grep-invert '@regression'
*/



import {test,expect} from "@playwright/test"



test("Test for launch application @smoke",async({})=>{

    console.log("Application launched successfully!");
    

})

test("Test for Registration in app @functional",async({})=>{

    console.log("User regitration is completed!");
    

})

test("Test for login in app @functional @regression",async({page})=>{

    console.log("User login is completed!");
   //expect(true).toBeFalsy();
   await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
   await page.getByPlaceholder("E-Mail Address###").fill("testtest@gmail.com");

})

test("Test for search product in app @regression",async({})=>{

    console.log("User search for product is completed!");
    

})
/*
After playwright version 1.40 or 45 they add tag at object level
*/

test("Test for Logout in app {tag:'@regression'} ",async({})=>{

    console.log("User logout is completed!");
    

})