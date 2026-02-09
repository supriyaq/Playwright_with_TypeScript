//Excel File Data//

/*
pre-requisite
npm install xlsx


*/
 import{test,expect,Locator} from '@playwright/test';
 import fs from 'fs';
 import * as XLSX from'xlsx';


 const ExcelFilePath:string='TestData_Folder/ExcelData.xlsx';

// ExcelFile==> workbook==> sheets==>rows/columns
//getting data from excel sheet//
 const workbook=XLSX.readFile(ExcelFilePath);
 const currentSheet=workbook.SheetNames[0];
 const targetSheet:any=workbook.Sheets[currentSheet];

 //convert sheet into json

 const loginTestData:any=XLSX.utils.sheet_to_json(targetSheet);
 console.log('The converted data is:',loginTestData)

 test.describe('Login Functionality using Multiple sets of data', async () => {
     for (let {email, password, validity} of loginTestData) {
         test(`Login Test for Email:${email} ,Password: ${password} for ${validity} data`, async ({ page }) => {
             await page.goto("https://demowebshop.tricentis.com/login");
             await page.waitForTimeout(3000);
 
             const emailAddres: Locator = await page.locator("#Email");
             const passwordField: Locator = await page.locator("#Password");
             const LoginButton: Locator = await page.locator("input[value='Log in']")
 
 
             await emailAddres.fill(email);
             await passwordField.fill(password);
             await LoginButton.click();
 
             if (validity.toLowerCase() === "valid") {
                 const logOutLink: Locator = await page.locator(".ico-logout");
                 await expect(logOutLink).toBeVisible();
             }
 
             else {
                 //Assert error message is visible
                 if (validity.toLowerCase() === "invalid") {
                     const errorMessage: Locator = await page.locator("div[class='validation-summary-errors'] span");
 
                     await expect(errorMessage).toBeVisible();
                     await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
                 }
             }
 
 
 
         })
 
     }
 
 
 })
 
 




