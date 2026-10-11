import {test,expect,Locator} from "@playwright/test"



test("Test for Dynamic web table",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

//scroll the page
page.getByRole("heading",{name:"Dynamic Web Table",level:2}).scrollIntoViewIfNeeded();

//headings +columns
let allHeadings:string[]=await page.locator("//table[@id='taskTable']//th").allInnerTexts();
console.log("Number of headings & columns: "+allHeadings.length);//5

for(let heading of allHeadings)
{
    console.log(heading);
    
}

//number of rows
let allRows:number=await page.locator("//table[@id='taskTable']//tr").count();
console.log('Number of rorws: '+allRows);//5

console.log("------------");
//specific column

//iterate all headings and get the current position of cpu column

let expHeading='Network (Mbps)';
let headingcount=0;
for(let heading of allHeadings)
{
    headingcount++;
    if(heading.includes(expHeading))
    {
        //get the position
        console.log(expHeading+" found at position: "+headingcount);
        let columnData:string[]=await page.locator("//table[@id='taskTable']//tbody//tr/td["+headingcount+"]").allInnerTexts();
            console.log(columnData);
    }

}

console.log("---------------");
//specific row

//first column data iterate
let allNames:string[]=await page.locator("//table[@id='taskTable']//tbody//tr/td[1]").allInnerTexts();

let expBrowserName="Chrome";
let rowCount=0;
for(let bname of allNames)
{ 
    rowCount++;
    if(bname.includes(expBrowserName))
    {
        console.log(expBrowserName+" found at position : "+rowCount);
        let rowData:string[]=await page.locator("//table[@id='taskTable']//tbody//tr["+rowCount+"]/td").allInnerTexts();
        console.log(rowData);
        
    }


}

console.log("-----------------------");

//Disk space of Firefox process: 0.70 MB/s

let expBname="Firefox";

let bcount=0;
for(let bname of allNames)
{
bcount++;
if(bname.includes(expBname))
{
    console.log(expBname+" found at position: "+bcount);//firefox position
    let allSiblings:string[]=await page.locator("//td[text()='Firefox']//following-sibling::td").allInnerTexts();
    console.log(allSiblings);

    let actDiskSpace:string=await page.locator("//td[text()='Firefox']//following-sibling::td[contains(text(),'MB/s')]").innerText();
    console.log(actDiskSpace);

    let expDiskSpace:string=await page.locator("strong.firefox-disk").innerText();

    expect(expDiskSpace).toEqual(actDiskSpace);
    console.log("Firefox Disk space is matched: "+actDiskSpace);
    
    
}

}




await page.waitForTimeout(2000);
})