
/*
To read excel data we need SheetJs library
----------------------------------------------
The SheetJS Community Edition offers battle-tested open-source solutions for extracting useful data from almost any complex spreadsheet and generating new spreadsheets that will work with legacy and modern software

https://www.npmjs.com/package/xlsx

npm install xlsx

*/

import {test,expect} from "@playwright/test";
import XLSX from "xlsx";

import {excelUtil} from "../Utils/ExcelUtil.js"
import {excelSheetWiseDataReading} from "../Utils/ExcelSheetwiseUtil.js"
import { log } from "console";

test("Test for Excel file reading",()=>{

//read the file 
let workbook=XLSX.readFile("TestData/ExcelData.xlsx");

//from wrokbook goto sheet
let wroksheet=workbook.Sheets["userData"];

//sheet data do convert it into js object
let jsonObjectData:any=XLSX.utils.sheet_to_json(wroksheet);

console.log(jsonObjectData);

//3index data
console.log(jsonObjectData[3].Email);


})


test("Test for reading data from excel and use it in test case",async({page})=>{

    //read the from excel
    let data=excelUtil(3);

    await page.goto("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill(data.Email);
    await page.getByPlaceholder("Password").fill(data.Password);
    await page.getByText("Submit").click();

})

test("Test for reading data sheetwise",()=>{


let data=excelSheetWiseDataReading("BookData",0);
console.log(data);

console.log(data.bookName);
console.log(data.price);


})