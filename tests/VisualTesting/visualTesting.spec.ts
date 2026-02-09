import{test,expect,Locator} from '@playwright/test';

test.skip('Taking screenshot of HomePage',async({page})=>
{
    // await page.goto("https://demowebshop.tricentis.com/");

    await page.goto("https://demowebshop.tricentis.com/register");

     const logo:Locator=await page.locator("img[alt='Tricentis Demo Web Shop']");


    //snapshot of page
//    await expect(await page.screenshot()).toMatchSnapshot('HomePage.png');

   //take snapshot of the element

   await expect(await logo.screenshot()).toMatchSnapshot('Logo.png');

  


    await page.waitForTimeout(3000);
})


test('Take_screenshot',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    //   await page.goto("https://demowebshop.tricentis.com/register");

    const logo:Locator=await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(await logo.screenshot()).toMatchSnapshot('Logo.png');

   await expect(page).toHaveScreenshot();


    await page.waitForTimeout(3000);
})




//golden file==> it is the screenshot of the screenshot taken by the file.