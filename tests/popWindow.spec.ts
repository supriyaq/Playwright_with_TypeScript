import{test,expect,Locator,chromium, BrowserContext, Page} from '@playwright/test';


test('handle Pop Windows',async({browser})=>
{
    const context:BrowserContext=await browser.newContext();
    const parentPage:Page=await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");
    await parentPage.waitForTimeout(3000);

    const popWinodw:Locator=await parentPage.locator("button#PopUp");

    const [Page1]=await Promise.all([popWinodw.click(),parentPage.waitForEvent('popup')]);
    //    await parentPage.waitForTimeout(3000);

    const [Page2]=await Promise.all([popWinodw.click(),parentPage.waitForEvent('popup')]);


    const pageArray=await context.pages();
    const childPage1=await pageArray[1];
    const childPage2=await pageArray[2];

    const count=await pageArray.length;
    console.log('The number of pages are:',pageArray.length);

    const parentPageTitle:string=await parentPage.title();
    const childPage1Title:string=await childPage1.title();
    const childPage2Title:string=await childPage2.title();

    const parentPageurl:string=await parentPage.url();
    const childPage1url:string=await childPage1.url();
    const childPage2url:string=await childPage2.url();


    console.log('the title of parent page is:',parentPageTitle);
    console.log('the title of first child page is:',childPage1Title);
    console.log('the title of second child page is:',childPage2Title);


    console.log(' ');
    console.log(' ');

    console.log('the url of parent page is:',parentPageurl);
    console.log('the url of first child page is:',childPage1url);
    console.log('the url of second child page is:',childPage2url);


    for(let page of pageArray)
    {
        const title=await page.title();
        if(title.includes('Playwright'))
        {
            const button_GetStarted:Locator=await page.locator('a[class="getStarted_Sjon"]');
            await button_GetStarted.click();
            await page.waitForTimeout(3000);
            await page.close();
        }
    }


    await parentPage.waitForTimeout(2000);

})