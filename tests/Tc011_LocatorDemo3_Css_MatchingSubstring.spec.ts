
import {test,expect,Locator} from "@playwright/test"


test("Test for macthing substrings in CssSelector",async({page})=>{

    //open application
    await page.goto("https://www.amazon.in/");

    await page.waitForTimeout(1000);
    await page.locator("#twotabsearchtextbox").fill("Bags");

    //search box identify with partial id : *
    let searchEle:Locator=page.locator("input[id*='searchtex']");
    //clear the text
    await searchEle.clear();
    //fill the data
    await searchEle.fill("watch");
    //press Enter form keybord
    await searchEle.press('Enter');

    await page.waitForTimeout(1000);

    //search box identify with prefix  ^
    let serachEle2=page.locator("input[id^='twotab']");
    await serachEle2.clear();
    await serachEle2.fill("mobiles");
    await serachEle2.press('Enter');

     await page.waitForTimeout(1000);
    //search box identify with suffix $
    let searchEle3=page.locator("input[id $='box']");
    await searchEle3.clear();
    await searchEle3.fill('Laptop');
    await searchEle3.press('Enter');


    await page.waitForTimeout(2000);

})