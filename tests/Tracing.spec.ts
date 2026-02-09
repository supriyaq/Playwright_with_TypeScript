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

    await page.waitForTimeout(2000);
    const logOutLink:Locator=await page.locator("#logout2");


    const welcomeText:string|null=await page.locator("#nameofuser").innerText();
    await expect(welcomeText).toContain('Welcome');


    await expect(logOutLink).toBeVisible();

    await logOutLink.click();





})


test.only('Tracing through Context Programme file',async()=>
{
    const timestamp=await Date.now();
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await context.tracing.start(
        {screenshots:true,snapshots:true}
    );

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

    await page.waitForTimeout(3000);
    const logOutLink:Locator=await page.locator("#logout2");


    const welcomeText:string|null=await page.locator("#nameofuser").innerText();
    console.log(welcomeText)
    await expect(welcomeText).toContain('Welcome pavanol');


    await expect(logOutLink).toBeVisible();

    await logOutLink.click();


    await context.tracing.stop({path:'ScreenShots_Files/Trace.zip'});





})



/*
-Tracing can be done in 3 different ways:
1.using configuration files
-global configuration
-attached to the html report


2.using command line
-npx playwright test (file name) trace-on
-if file name not specified then it would be applied globally
-attached to html report

3.using the programming code
-context.tracing.start({screenshots:true,snapshots:true})
//statements
constext.tracing.stop({path:'path of file where user wants to save it})
-only for the local file
-it is not attached to the html report and it be saved to the path where the user have saved itz



//how we can view the trace file
-1. from html file===>npx playwright show report
2. through command line npx playwright show-trace "path of trace file"
3. using utility 'trace.playwright.dev' and just drag and drop OR upload the trace.zip file
*/

