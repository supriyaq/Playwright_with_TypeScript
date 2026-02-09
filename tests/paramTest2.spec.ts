//param Test 2//
import { test, expect, Locator } from '@playwright/test';

const loginTestData: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["invaliduser@example.com", "test321", "invalid"],
    ["validuser@example.com", 'testxyz', 'invalid'],
    [" ", " ", "invalid"]
]


test.describe('Login Functionality using Multiple sets of data',async()=>
{
    for(let [email,password,validity] of loginTestData)
{
    test(`Login Test for Email:${email} ,Password: ${password} for ${validity} data`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.waitForTimeout(3000);

    const emailAddres: Locator = await page.locator("#Email");
    const passwordField: Locator = await page.locator("#Password");
    const LoginButton: Locator = await page.locator("input[value='Log in']")


    await emailAddres.fill(email);
    await passwordField.fill(password);
    await LoginButton.click();

    if (validity.toLowerCase() === "valid")
         {
        const logOutLink: Locator = await page.locator(".ico-logout");
        await expect(logOutLink).toBeVisible();
    }

    else
    {
        //Assert error message is visible
        if(validity.toLowerCase() === "invalid")
        {
            const errorMessage:Locator=await page.locator("div[class='validation-summary-errors'] span");

            await expect(errorMessage).toBeVisible();
            await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
        }
    }



})

}


})


