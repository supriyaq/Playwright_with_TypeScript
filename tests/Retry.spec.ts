import{test,expect,Locator, chromium}  from '@playwright/test';

test('Tracing through Configuration file',async({page})=>
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

    await page.waitForTimeout(5000);
    const logOutLink:Locator=await page.locator("#logout2");


    const welcomeText:string|null=await page.locator("#nameofuser").innerText();
    await expect(welcomeText).toContain('Welcome');


    await expect(logOutLink).toBeVisible();

    await logOutLink.click();




});