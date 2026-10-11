

import {test,expect} from "@playwright/test"
import {jsonDDTUtil} from "../Utils/JSONDDT.js"

let jsDataSet=jsonDDTUtil();

for(let data of jsDataSet)
{
test(`Test for CRM app data driven test with record ${data.id}`,async({page})=>{

await page.goto("https://automationplayground.com/crm/login.html");
await page.getByPlaceholder("Enter email").fill(data.email);
await page.getByPlaceholder("Password").fill(data.password);
await page.getByText("Submit").click();
})

}