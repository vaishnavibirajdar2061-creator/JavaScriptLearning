


import {test,expect, Locator} from "@playwright/test"

import { scrollDown,scrollUp,scrollToTheElement } from "./Generics/AppUtil.js";

test("Test for scroll feature using Utility",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await scrollDown(page);

    await page.waitForTimeout(2000);

    await scrollUp(page);

    let loc:Locator=page.getByRole('heading',{name:"Upload Files",level:2});
    await scrollToTheElement(page,loc);

    await page.waitForTimeout(2000);
})
