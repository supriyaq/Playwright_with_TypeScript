import {test,expect,Locator} from '@playwright/test';

test("Dynamic Elements using Xpath",async({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    


    for(let i=0;i<6;i++)
    {
        const button_:Locator=await page.locator("//button[text()='STOP' or text()='START']");
        console.log(await button_.textContent());
        await button_.click();

        await page.waitForTimeout(1000);
    }

})


test("Dynamic Elements using CSS Locator",async({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    


    for(let i=0;i<6;i++)
    {
        const button_:Locator=await page.locator("button[name='stop'], button[name='start']");
        console.log(await button_.textContent());
        await button_.click();

        await page.waitForTimeout(1000);
    }

})



test.only("Dynamic Elements using playwright build In Locator",async({page})=>

{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    


    for(let i=0;i<6;i++)
    {
        const button_:Locator=await page.getByRole("button",{name:/START|STOP/});
        console.log(await button_.textContent());
        await button_.click();

        await page.waitForTimeout(1000);
    }

})