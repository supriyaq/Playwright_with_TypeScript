import{test,expect,Locator,chromium,Page} from '@playwright/test';

test('Handle multiple Tabs in a browser',async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const parentPage=await context.newPage();

    await parentPage.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await parentPage.waitForLoadState();


    const newLink:Locator=await parentPage.locator('a[href="http://www.orangehrm.com"]');
     await parentPage.waitForTimeout(3000);


    // await newLink.click(); //opens the link in new tab
    // await context.waitForEvent('page');//

    const [newPage]=await Promise.all([newLink.click(),context.waitForEvent('page')]);
    const pageArray=await context.pages();
    const childPage:Page=await pageArray[1];


    const pageCount:number=await pageArray.length;
    console.log('The number of pages in the context are:',pageCount);

    await childPage.waitForTimeout(3000);

    /* const parentPage_Title:string=await pageArray[0].title();
    const childPage_Title:string=await pageArray[1].title(); */

    const parentPage_Title:string=await parentPage.title();
    const childPage_Title:string=await childPage.title();


    console.log('the title of parent page is:',parentPage_Title);
    console.log('the title of child page is:',childPage_Title);

    await expect(parentPage).toHaveTitle(parentPage_Title);
    await expect(childPage).toHaveTitle(childPage_Title);








   


})