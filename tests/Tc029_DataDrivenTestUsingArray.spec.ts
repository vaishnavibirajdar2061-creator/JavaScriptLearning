
import {test,expect} from "@playwright/test"


//test data in array
let testData=[
    {id:1,email:"test11@gmail.com",password:"test123"},
    {id:2,email:"test12@gmail.com",password:"test123"},
    {id:3,email:"test13@gmail.com",password:"test123"},
    {id:4,email:"test14@gmail.com",password:"test123"}
]

for(let data of testData)
{
test(`Test for CRM app data driven test with record ${data.id}`,async({page})=>{

await page.goto("https://automationplayground.com/crm/login.html");
await page.getByPlaceholder("Enter email").fill(data.email);
await page.getByPlaceholder("Password").fill(data.password);
await page.getByText("Submit").click();
})

}