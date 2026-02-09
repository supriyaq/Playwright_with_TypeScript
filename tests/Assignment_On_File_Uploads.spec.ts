// Assignment on  file Uploads//

import{test,expect,Locator} from '@playwright/test';

test('Verify the single File Upload',async({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.waitForTimeout(3000);

    const chooseFiles:Locator=await page.locator('input#filesToUpload');
    await chooseFiles.setInputFiles('Upload_Files/Hardhat With JavaScript.pdf');

    const uploadedFiles:Locator=await page.locator("ul#fileList li");
    const uploadedFileName:string|null=await uploadedFiles.textContent();

    console.log('the uploaded file is:',uploadedFileName);
    await expect(uploadedFileName).toContain('JavaScript')


    await page.waitForTimeout(3000);
})


test.only('upload Multiple Files',async({page})=>
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(3000);

    const chooseFile:Locator=await page.locator('input#filesToUpload');
    await chooseFile.setInputFiles(['Upload_Files/Hardhat With JavaScript.pdf','Upload_Files/Playwright with JavaScript.pdf','Upload_Files/Selenium With Java.pdf']);


    const uploadedFiles:Locator=await page.locator('ul#fileList li');
    const uploadedFilesNames:string[]=await uploadedFiles.allInnerTexts();

    for(let bookName of uploadedFilesNames)
    {
        console.log(bookName);
    }

    const count:number=await uploadedFilesNames.length;
    console.log('the total number of uploaded files are:',count)

    await page.waitForTimeout(3000);
})