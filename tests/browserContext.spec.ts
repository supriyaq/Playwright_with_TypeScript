import{test,expect,Locator,chromium,Page,firefox,webkit, BrowserContext} from '@playwright/test';


//Browser---->Context---->Pages
//Browser---->chromium,firefox,webkit
//context---> we can have multiple contexts for multiple users/apps for the same browser
            //   provide a way to operate multiple independent browser sessions 

//pages----> new-tab ,window, pop-up




test('Browser Context Demo',async()=>
{
    const browser=await chromium.launch();
    // const browser=await firefox.launch();
    // const browser=await webkit.launch();
    const context:BrowserContext=await browser.newContext();
    const page:Page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);



    const page1=await context.newPage();
    const page2=await context.newPage();

    const pageCount=await context.pages();//it will provide an array of pages//
    console.log("the number of pages created are:",pageCount.length);



    await page1.goto("https://www.nykaa.com/");
    await page2.goto("https://www.amazon.in/");

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

    const page1_title:string=await page1.title();
    const page2_title:string=await page2.title();

    console.log('the title of page 1 is:',page1_title);
    console.log('the title of page 2 is:',page2_title);

    await expect(page1).toHaveTitle(page1_title)
    await expect(page2).toHaveTitle(page2_title)




})