import{test,expect} from '@playwright/test';

test("Verify URL",async({page})=>
{
    await page.goto("http://www.automationpractice.pl/index.php");
    const URL_:string=await page.url();
    console.log('the URL is :',URL_);

    await expect(page).toHaveURL(URL_);
    await expect(page).toHaveURL(/automationpractice.pl/);

})