import {test,expect,Locator} from '@playwright/test';

test('Assignment on Drag and Drop',async({page})=>
{
    await page.goto("https://demo.guru99.com/test/drag_drop.html");
    await page.waitForTimeout(4000);

    const target_bank:Locator=await page.locator("ol[id='bank'] li[class='placeholder']");
    const source_bank:Locator=await page.locator("li[id='credit2'] a[class='button button-orange']");


    const target_amount:Locator=await page.locator("ol[id='amt7'] li")
    const source_amount:Locator=await page.locator("section[id='g-container-main'] li:nth-child(2) a:nth-child(1)");

  await source_bank.dragTo(target_bank);
  await source_amount.dragTo(target_amount);

    await page.waitForTimeout(4000);
    const target_sales:Locator=await page.locator("ol[id='loan'] li[class='placeholder']");
    const source_sales:Locator=await page.locator("li[id='credit1'] a[class='button button-orange']");


     const source_credit:Locator=await page.locator("section[id='g-container-main'] li:nth-child(2) a:nth-child(1)");
    const target_credit:Locator=await page.locator("ol[id='amt8'] li[class='placeholder']");

    await source_sales.dragTo(target_sales);
    await source_credit.dragTo(target_credit);

    await page.waitForTimeout(4000);

    const perfect:Locator=await page.locator("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(10) > a:nth-child(1)");

    const text:string|null=await perfect.textContent();
    await expect(perfect).toBeVisible();
    await expect(text).toBe('Perfect!')
})