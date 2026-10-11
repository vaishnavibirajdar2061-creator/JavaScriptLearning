/*

Assertion
----------------
- Assertion will help to validate current state of application
- Playwright support two types of assertion
1.Hard assertion
2.Soft assertion

1.Hard Assertion
---------------------
-Excution of current test will stop when assertion fail
-In Playwright we have autowait for assertion is 5sec so after 5sec you will see error

expect(assertion)


2.Soft Assertion
------------------
- After failure even test will complete execution
-In Playwright we have autowait for assertion is 5sec so after 5sec you will see error

expect.soft(assertion)


*/


import {test,expect} from "@playwright/test";


test("Test for hard assertion",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

//page level url based assertion
await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
console.log("Current url matched!");

//partial match
await expect(page).toHaveURL(/demo/);
console.log("Url matched: "+page.url());


//title based assertion
await expect(page).toHaveTitle("Account Login");
console.log("Title matched!");

//partial match
await expect(page).toHaveTitle(/Login/);
console.log("Title mathced: "+await page.title());

//heading should be visible on page
 let heading1=page.getByRole('heading',{name:'Returning Customer',level:2});
 await expect(heading1).toBeVisible();
console.log("Heading is visible and text is: "+await heading1.innerText());

//heading should have Returning Customer text
await expect(heading1).toHaveText("Returning Customer");
console.log("Text is matched!");

//WebElement :visible/enable/editable/test values/attribute
let emailEle=page.getByPlaceholder("E-Mail Address");

//webelement is visible
await expect(emailEle).toBeVisible();

//webelement is enable
await expect(emailEle).toBeEnabled();

//webelement is editable
await expect(emailEle).toBeEditable();

//peform action
await emailEle.fill("test26@gmail.com");

//validate entered email value
//Ensures the Locator points to an element with the given input value.
await expect(emailEle).toHaveValue("test26@gmail.com");
console.log("Email value matched!");

//validate emailElement is attached with id="input-email" attribute
await expect(emailEle).toHaveAttribute('id','input-email');


//validate footer links count : should be 16
//Ensures the Locator resolves to an exact number of DOM nodes.
await expect(page.locator("footer a")).toHaveCount(16);
console.log("Total footers are :"+await page.locator("footer a").count());



await page.waitForTimeout(2000);
})

test("Test for hard assertion for checkbox initial status",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/checkboxes");

//validate first checkbox should be unchecked
await expect(page.locator("input[type='checkbox']").first()).not.toBeChecked();

//validate second checkbox should be checked
await expect(page.locator("input[type='checkbox']").last()).toBeChecked();

console.log("Checkbox initial status is validated!");


})


test("Test for Soft assertion",async({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

//page level url based assertion
await expect.soft(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
console.log("Current url matched!");

//partial match
await expect.soft(page).toHaveURL(/demo/);
console.log("Url matched: "+page.url());


//title based assertion
await expect.soft(page).toHaveTitle("Account Login");
console.log("Title matched!");

//partial match
await expect.soft(page).toHaveTitle(/Login/);
console.log("Title mathced: "+await page.title());

//heading should be visible on page
 let heading1=page.getByRole('heading',{name:'Returning Customer',level:2});
 await expect.soft(heading1).toBeVisible();
console.log("Heading is visible and text is: "+await heading1.innerText());

//heading should have Returning Customer text
await expect.soft(heading1).toHaveText("Returning Customer");
console.log("Text is matched!");

//WebElement :visible/enable/editable/test values/attribute
let emailEle=page.getByPlaceholder("E-Mail Address");

//webelement is visible
await expect.soft(emailEle).toBeVisible();

//webelement is enable
await expect.soft(emailEle).toBeEnabled();

//webelement is editable
await expect.soft(emailEle).toBeEditable();

//peform action
await emailEle.fill("test26@gmail.com");

//validate entered email value
//Ensures the Locator points to an element with the given input value.
await expect.soft(emailEle).toHaveValue("test26@gmail.com");
console.log("Email value matched!");

//validate emailElement is attached with id="input-email" attribute
await expect.soft(emailEle).toHaveAttribute('id','input-email');


//validate footer links count : should be 16
//Ensures the Locator resolves to an exact number of DOM nodes.
await expect.soft(page.locator("footer a")).toHaveCount(16);
console.log("Total footers are :"+await page.locator("footer a").count());



await page.waitForTimeout(2000);
})