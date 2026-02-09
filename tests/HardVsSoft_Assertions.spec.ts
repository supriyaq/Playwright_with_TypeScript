//Hard Vs Soft Assertions

import {test,expect,Locator} from '@playwright/test';

test('Hard Assertions',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page).toHaveTitle('Demo Web Shop ss');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');


    const logo:Locator=await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();

    //since logo is an locator so its auto-retry assertion//

    //all the above three are auto-retry assertions//

    //In case of hard assertion if any assertion fails it wont execute the next statements and will terminate the test and rest of the code wont be executed


    await page.waitForTimeout(3000);
})


test.only('Soft Assertions',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    await expect.soft(page).toHaveTitle('Demo Web Shop gg');
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');


    const logo:Locator=await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();

    //since logo is an locator so its auto-retry assertion//

    //all the above three are auto-retry assertions//


    await page.waitForTimeout(3000);
})