//Download files
import {test,expect,Locator} from '@playwright/test';
import fs from 'fs';

test('DownLoad Text Files',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.waitForTimeout(3000);

    const textArea:Locator=await page.locator("textarea#inputText");
    await textArea.fill('Hello everyOne .... Welcome to hell !');

    const generateLinkButton:Locator=await page.locator('button#generateTxt');
    await generateLinkButton.click();

    const generatedLink:Locator=await page.locator('a#txtDownloadLink');
    
    const download_=await Promise.all([generatedLink.click(),page.waitForEvent('download')]);
    const download=await download_[1];

    const downloadPath:string='Download_Files/Text_File'+Date.now();

    await download.saveAs(downloadPath);

    const downloadStatus:boolean=await fs.existsSync(downloadPath);
    console.log('the file got downloaded ?:',downloadStatus)

    await expect(downloadStatus).toBeTruthy();

    if(downloadStatus)
    {
        await fs.unlinkSync(downloadPath);
    }


    await page.waitForTimeout(3000);
})


test.only('Download Pdf files',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.waitForTimeout(3000);

    const textArea:Locator=await page.locator('textarea#inputText');
    await textArea.fill('Hello EveryoNe !!!');

    const generateLinkButton:Locator=await page.locator('button#generatePdf');
    await generateLinkButton.click();

    const generateLink:Locator=await page.locator("a#pdfDownloadLink");

    const download_=await Promise.all([generateLink.click(),page.waitForEvent('download')]);
    const download=await download_[1];

    const downloadPath:string='Download_Files/Pdf_Files'+Date.now();

    await download.saveAs(downloadPath);

    const pdfStatus:boolean=await fs.existsSync(downloadPath);
    console.log('The odf file is downloaded:???',pdfStatus);

    await expect(pdfStatus).toBeTruthy();

    if(pdfStatus)
    {
        await fs.unlinkSync(downloadPath)
    }



    await page.waitForTimeout(3000);


})