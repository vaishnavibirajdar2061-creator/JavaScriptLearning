

import {test,expect} from "@playwright/test";


test("Test for Built In locator getByRole()",async({page})=>{

    await page.goto("https://automationplayground.com/crm/");

    //SignIn getByRole('role',{name:'accessibility name'})
   await page.getByRole('link',{name:"Sign In"}).click();

    //email
    await page.getByRole('textbox',{name:"Enter email"}).fill("test@gmail.com");

    //password
    await page.getByRole('textbox',{name:"Password"}).fill("test123");

    //checkbox
    await page.getByRole('checkbox',{name:"Remember me"}).check();

    //submit
    await page.getByRole('button',{name:"Submit"}).click();


await page.waitForTimeout(2000);


})


test("Test for BuiltIn locator for application",async({page})=>{

    //open application
    await page.goto("https://automationplayground.com/crm/");

    //sign In link: getByRole()
    await page.getByRole('link',{name:"Sign In"}).click();

    //Email id: getByPlaceholder()
    await page.getByPlaceholder("Enter email").fill("test@gmail.com");

    //password: getByLabel()
    await page.getByLabel("Password").fill("test123");

    //checkbox: getByText()
    await page.getByText("Remember me").check();

    //submit: getByRole()
    await page.getByRole('button',{name:"Submit"}).click();


await page.waitForTimeout(2000);

})

test("Test for images using getByAltText()",async({page})=>{

    await page.goto("https://playwright.dev/docs/locators#locate-by-alt-text");

    await page.waitForLoadState('domcontentloaded');//30sec

    //identify image validate visibility and click on image
    await expect(page.getByAltText("Playwright logo").first()).toBeVisible();

    //click
    await page.getByAltText("Playwright logo").first().click();//1

    //await page.getByRole('img',{ name: 'playwright logo', exact: true }).click();
    //await page.locator("a.navbar__brand").nth(1).getByAltText("Playwright logo").click();

    //await page.locator("img[class $='dark_xIcU']").first().click();
    //await page.locator("(//img[contains(@class,'themedComponent--dark_xIcU')])[1]").click();

    //page navigates to homepage 30sec
    //await page.waitForURL("https://playwright.dev/");

    //home page should be display based on title of page 
   //await  expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps/)

   await expect(page).toHaveTitle(/Locators/);

   await page.waitForTimeout(2000);
})


test("test for image using getByAltText() and getByTitle()",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?");

    //getByAltText()
    //await page.locator("div.image>a").getByAltText("iPhone").click();

    //title='iPhone': getByTitle()
    await page.getByTitle("iPhone").click();

    await page.waitForTimeout(2000);
})


test.only("Test for getByTestId(): for attribute data-testid",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //<p data-testid="profile-email">john.doe@example.com</p>

    //scenario: get the email in console
    let text1=await page.getByTestId("profile-email").innerText();
    console.log('Email is: '+text1);
    

    await page.waitForTimeout(2000);
})
