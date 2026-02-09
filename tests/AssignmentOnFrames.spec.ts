//Assignment on Frames//

import{test,expect,Locator} from '@playwright/test';

test('Assignment on Frames',async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame5=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'});

    if(frame5)
    {
        const inputBox:Locator=await frame5.locator('input[name="mytext5"]');
        await inputBox.fill('input box inside frame5');

        const link:Locator=await frame5.locator('a[href="https://a9t9.com"]');
        await link.click();

        await page.waitForTimeout(3000);

        const logo:Locator=await frame5.locator('img[src="/Content/Images/ui.vision.logo2.webp"]');

        await expect(logo).toBeVisible();
        console.log("The logo is visible")
    }


    await page.waitForTimeout(3000);
})