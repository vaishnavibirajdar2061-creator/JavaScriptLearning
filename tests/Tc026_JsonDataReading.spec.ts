


import {test,expect} from "@playwright/test"
//here fs is file system object
import fs from "fs"
import {jsonUtil} from "../Utils/JsonUtil.js"


test("Test for Reading json single data from file into testcase",async({page})=>{

    //json--->js
//parse():Converts a JavaScript Object Notation (JSON) string into an object.
    
let data=JSON.parse(fs.readFileSync("TestData/SingleData.json","utf-8"));

    console.log(data);//{ email: 'test1@gmail.com', password: 'test123' }

    console.log(data.email);
    console.log(data.password);
    
    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(data.email);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByText("Submit").click();

})


test("Test for Reading Json data when multiple records are there file",async({page})=>{
/*
    let data=JSON.parse(fs.readFileSync("TestData/CRMMultipleDataSet.json","utf-8"));

    console.log(data);//{ email: 'test1@gmail.com', password: 'test123' }
   //as per index call the data
    console.log(data[1].email);
    console.log(data[1].password);

    */

    let data=jsonUtil(2);
    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(data.email);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByText("Submit").click();

})