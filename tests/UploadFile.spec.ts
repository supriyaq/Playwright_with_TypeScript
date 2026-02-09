import{test,expect,Locator} from '@playwright/test';

test('Single File Upload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    const chooseFile:Locator=await page.locator("input#singleFileInput");
    await chooseFile.setInputFiles('Upload_Files/Hardhat With JavaScript.pdf');

    const uploadSingleFile:Locator=await page.locator("button:has-text('Upload Single File')");
    await uploadSingleFile.click();
    await page.waitForTimeout(2000);

    const heading:Locator=await page.locator("p#singleFileStatus");
    const text:string|null=await heading.textContent();
    console.log('Confirmation Message after uploading the file:',text);

    await expect(text).toContain('Single file selected: Hardhat With JavaScript.pdf');
    await expect(text).toContain('Size: 202296 bytes');
    await expect(text).toContain('Type: application/pdf');


    await page.waitForTimeout(3000);
})


test.only('Multiple File Uploads',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);

    const chooseFile:Locator=await page.locator("input#multipleFilesInput");

    await chooseFile.setInputFiles(['Upload_Files/Hardhat With JavaScript.pdf','Upload_Files/Playwright with JavaScript.pdf','Upload_Files/Selenium With Java.pdf']);

    const uploadMultipleFiles:Locator=await page.locator("button:has-text('Upload Multiple Files')");
    await uploadMultipleFiles.click();

    const heading:Locator=await page.locator("p#multipleFilesStatus");
    const text:string|null=await heading.textContent();

    console.log('the confirmation message after the the sucessfull upload is done:',text);

    await expect(text).toContain('Hardhat With JavaScript.pdf')
    await expect(text).toContain('Size: 169229 bytes')
    await expect(text).toContain('Type: application/pdf')
    await expect(text).toContain('Size: 197339 bytes,')


    await page.waitForTimeout(3000);
})