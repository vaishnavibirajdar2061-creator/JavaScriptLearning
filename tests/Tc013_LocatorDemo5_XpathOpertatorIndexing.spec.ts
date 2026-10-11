


import {test,expect} from "@playwright/test";


test("Test for Registration using xpath operator and indexing",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

//firstName: xpath with and
await page.locator("//input[@name='firstname' and @class='form-control']").fill("Kiran");

//lastname: xpath with or
await page.locator("//input[@name='lastname' or @class='form-contro']").fill("Shrma");

//random email
let email:string="kiran"+new Date().getTime()+"@gmail.com";

//email id: xpath with indexing
await page.locator("(//input[@class='form-control'])[3]").fill(email);

//telephone: xpath with indexing
await page.locator("(//input[@class='form-control'])[4]").fill("67587687");

//password: xpath with position()
await page.locator("(//input[@class='form-control'])[position()=5]").fill("test123");

//confirm password : xpath with position()
await page.locator("(//input[@class='form-control'])[position()=6]").fill("test123");

//yes radio button
await page.locator("//input[@type='radio']").nth(1).check();

//privacy policy
await page.locator("//input[@name='agree']").check();

//click on contiune
await page.locator("//input[@value='Continue']").click();

//successmessage in console
let message:String=await page.locator("//h1").nth(1).innerText();

//assert : toBe(): === strict equality
expect(message).toBe("Your Account Has Been Created!");
console.log("Success message is: "+message);

//assert: partial match toContain()
expect(message).toContain("Created!");
console.log("Success message is: "+message);


await page.waitForTimeout(2000);


})