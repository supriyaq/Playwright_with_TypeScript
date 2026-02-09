/*
pre-requisite
install the csv-parse module to read csv files:
npm install csv-parse

*/
import{test,expect,Locator} from '@playwright/test';
import {parse} from 'csv-parse/sync';
import fs from 'fs';



//Reading data from csv files
const csvFilePath:string='TestData_Folder/Data.csv';
const csv_Data=fs.readFileSync(csvFilePath,'utf-8');

const loginData:any=parse(csv_Data,{columns:true,skip_empty_lines:true});


test.describe('Login Functionality using Multiple sets of data', async () => {
    for (let record of loginData) {
        test(`Login Test for Email:${record.email} ,Password: ${record.password} for ${record.validity} data`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");
            await page.waitForTimeout(3000);

            const emailAddres: Locator = await page.locator("#Email");
            const passwordField: Locator = await page.locator("#Password");
            const LoginButton: Locator = await page.locator("input[value='Log in']")


            await emailAddres.fill(record.email);
            await passwordField.fill(record.password);
            await LoginButton.click();

            if (record.validity.toLowerCase() === "valid") {
                const logOutLink: Locator = await page.locator(".ico-logout");
                await expect(logOutLink).toBeVisible();
            }

            else {
                //Assert error message is visible
                if (record.validity.toLowerCase() === "invalid") {
                    const errorMessage: Locator = await page.locator("div[class='validation-summary-errors'] span");

                    await expect(errorMessage).toBeVisible();
                    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
                }
            }



        })

    }


})

