
/*
Parse CSV with JavaScript
Papa Parse is the fastest in-browser CSV (or delimited text) parser for JavaScript.
https://www.npmjs.com/package/papaparse

1.install
npm install papaparse
*/

import {test,expect} from "@playwright/test"
import fs from "fs"
import Papa from "papaparse"
import {csvUtil} from "../Utils/CsvUtil.js"

test("Test for Reading csv filedata",()=>{


    //extract csv file data from file:Synchronously reads the entire contents of a file.
    let csvFileContents=fs.readFileSync("TestData/TestCRMData.csv","utf-8");

    //parse it using papaparse library
    let result:any=Papa.parse(csvFileContents,{
        header:true, //If true, the first row of parsed data will be interpreted as field names. 
        skipEmptyLines:true //If true, lines that are completely empty (those which evaluate to an empty string) will be skipped.
    })

    console.log(result);//array of data[]
    /*
   result= {
  data: [
    0{ email: 'test11@gmail.com', password: 'test123' },
    1{ email: 'test12@gmail.com', password: 'test123' },
    2{ email: 'test13@gmail.com', password: 'test123' }
  ],}
    */

    console.log(result.data[2]);//here data is property of parse():{ email: 'test13@gmail.com', password: 'test123' }

    console.log(result.data[2].email);//test13@gmail.com
    

})


test("Test for reading csv file data and use it in testcase",async({page})=>{

    /*readingdata csvfile and converting into JsObject and returing specific record(as per index)
    which we can store(data variable) and as per key(email,password) read data in test case
    */
    let data=csvUtil(2);

     await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(data.email);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.getByText("Submit").click();

})