

import {test,expect} from "@playwright/test"
import { scrollDown } from "./Generics/AppUtil.js";

test("Test for Formy form dropdown",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

    await scrollDown(page);

        //select option using visible text
    await page.getByRole('combobox',{name:"Years of experience:"}).selectOption("10+");
    await page.waitForTimeout(1500);

    //select option using label
    await page.getByRole('combobox',{name:"Years of experience:"}).selectOption({label:"0-1"});
    await page.waitForTimeout(1500);
    //select option using index starts with 1
    await page.getByRole('combobox',{name:"Years of experience:"}).selectOption({index:3});
    await page.waitForTimeout(1500);
    //select option using value attribute
    await page.getByRole('combobox',{name:"Years of experience:"}).selectOption({value:"2"});


    await page.waitForTimeout(2000);

})


test.only("Tets for selectbased multiselection dropdown",async({page})=>{

    await page.goto("https://demoqa.com/select-menu");
   
    await scrollDown(page);
   
    await page.locator("#cars").selectOption(['Volvo','Audi']);

    await page.waitForTimeout(2000);
    
})