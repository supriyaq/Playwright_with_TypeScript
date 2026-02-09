import {test,expect ,Locator} from '@playwright/test';


test('Playwright Assertions Demo',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');

    //Auto-retrying assertions (automatically retries until it passes or timeout)
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // 1.Auto-retry :waits for the elements to be visible and have the expected text
    await expect(page.locator(".topic-html-content-header")).toBeVisible();
    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products');



    //2.Non-retrying assertion (executes immediately, no retry)
    const title=await page.title();
    const status:boolean=await title.includes('Demo Web Shop')
    expect(status).toBeTruthy(); //no auto-retry

    const welcomeText=await page.locator(".topic-html-content-header").textContent();
    expect(welcomeText).toContain('Welcome'); //non-retrying

    //3.Negative Matcher
    await expect(page.locator(".topic-html-content-header-ui")).not.toBeVisible();
    expect(welcomeText).not.toContain("Hello World !!!");

    //Negative Matchers are applicable for bot auto-retrying and non-retrying assertions







    await page.waitForTimeout(3000);
})