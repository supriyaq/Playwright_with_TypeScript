import {test,expect,Locator} from '@playwright/test';

test('Screenshots Demo',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(3000);

    const timestamp=await Date.now();


    // await page.screenshot({path:'ScreenShots_Files/'+'HomePAge'+timestamp+'.png'});
    //await page.screenshot({path:'ScreenShots_Files/'+'Full_Page'+timestamp+'.png',fullPage:true});


    //Screenshot of the logo element//
    //const logo=await page.locator("img[alt='Tricentis Demo Web Shop']");
    //await logo.screenshot({path:'ScreenShots_files/'+'Logo'+timestamp+'.png'})


    //Screenshot of the Featured Products//
    const FeaturedProducts=await page.locator(".product-grid.home-page-product-grid");
    await FeaturedProducts.screenshot({path:'ScreenShots_Files/'+'FeaturedProducts'+timestamp+'.png'});

    
})

test.only('Capture Screenshot by Configuration file',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(2000);

    const loginLink:Locator=await page.locator("#login2");
    await loginLink.click();

    const userName:Locator=await page.locator("#loginusername");
    await userName.fill("pavanol");

    const password:Locator=await page.locator("#loginpassword");
    await password.fill("test@123");

    const loginButton:Locator=await page.locator("button[onclick='logIn()']");
    await loginButton.click();

    await page.waitForTimeout(2000);
    const logOutLink:Locator=await page.locator("#logout2");


    const welcomeText:string|null=await page.locator("#nameofuser").textContent();
    await expect(welcomeText).toContain('Welcome')

    await logOutLink.click();





})