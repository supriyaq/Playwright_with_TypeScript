import{test,expect,Locator}  from '@playwright/test';

test.only('Recording through Configuration file',async({page})=>
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
    await expect(welcomeText).toContain('Welcome123');


    await expect(logOutLink).toBeVisible();

    await logOutLink.click();





})