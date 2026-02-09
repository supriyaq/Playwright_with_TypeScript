/*
what things we can achieve through browser context:
1. we can control the size of browser
2. we can acess the proxy browsers==> security and privacy of server
3. we can acess the authentication browsers
4. we can chnage the language of browser
5. Ignore HTTP errors
*/

import{test,expect,Locator,chromium} from '@playwright/test';
test('Browser Context',async()=>
{
    const browser=await chromium.launch({headless:false}); //will run in headed mode
    // const browser=await chromium.launch({headless:true});// will run in headless mode
    const browserContext=await browser.newContext(
        {
        viewport:{width:1200, height:800},
        locale:'en-US', //to open the browser in english language only.
        proxy:{server:'http://mydummystring:12345'},
        ignoreHTTPSErrors:true
        

        }
    );
    const page=await browserContext.newPage();

    // await page.goto("https://www.booksbykilo.in/new-books");
    await page.goto("https://expired.badssl.com");
    await page.waitForTimeout(3000);

    const title:string=await page.title();
    console.log('The title of page is :',title)
})