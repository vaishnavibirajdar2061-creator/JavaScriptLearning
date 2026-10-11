

import {test,expect} from "@playwright/test"


test("Test for single file Upload where type='file'available",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload");

await page.getByRole("button",{name:'Choose File'}).setInputFiles("src/Files/Appiumsetup.txt");

//upload
await page.getByRole("button",{name:'Upload'}).click();

let text:string=await page.getByRole("heading",{name:"File Uploaded!",level:3}).innerText();

//assert
expect(text).toBe("File Uploaded!");

//OR

await expect(page.getByRole("heading",{name:"File Uploaded!",level:3})).toHaveText("File Uploaded!")

console.log("File Upload status:"+text);

await page.waitForTimeout(2000);
})



test("Multiple Files upload scenario",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.getByRole('heading',{name:'Upload Files',level:2}).scrollIntoViewIfNeeded();


        //to attach files
        await page.locator("#multipleFilesInput").setInputFiles(["src/Files/Appiumsetup.txt","src/Files/Git Day-3 Practical.docx"])

        await page.getByRole('button',{name:'Upload Multiple Files'}).click();

        let text:string=await page.locator("#multipleFilesStatus").innerText();
        console.log(text);
        
    expect(text).toContain("Multiple files selected");

    await page.waitForTimeout(2000);


})


test("File Upload scenario where type='file' is not available",async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");


    let [fileUploadWindow]=await Promise.all([
        //start the event:monitor current pageand once it found file chooser window return the same
        page.waitForEvent('filechooser'),
        page.getByRole('button',{name:'Choose Files'}).click()


    ])//now these two statements will execute parallelly and returs filechooser window


    await fileUploadWindow.setFiles(["src/Files/Appiumsetup.txt","src/Files/Git Day-3 Practical.docx"]);


await page.waitForTimeout(2000);


})

test("Test for File Download scenario",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download");

await page.getByText("upload-me.txt").click();
//Playwright donload file in playwright browser


await page.waitForTimeout(2000);



})


test.only("Test for File Download scenario In current Project",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download");

let [downloadedFile]=await Promise.all([
page.waitForEvent('download'),
 page.getByText("upload-me.txt").click()
])

//get the name of file
let fileName=downloadedFile.suggestedFilename();
console.log("DownloadedFile name is: "+fileName);

//get the file name and store it in project location
await downloadedFile.saveAs("src/download/"+fileName);

await page.waitForTimeout(2000);

})