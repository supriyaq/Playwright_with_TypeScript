import{test,expect,Locator,chromium,webkit} from '@playwright/test';

test('Authenticated Pop Up',async()=>
{
    const browser=await webkit.launch();

    //Approach 2//
    const context=await browser.newContext(
        {httpCredentials:
            {username:'admin',password:'admin'}
        }
    );
    const page=await context.newPage();


    //Approach 1:
    //https://admin:admin@the-internet.herokuapp.com/basic_auth

    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();
    await page.waitForTimeout(3000);

    const heading:Locator=await page.getByText('Congratulations! You must have the proper credentials.');

    let text:String|null=await heading.textContent();
    if(text)
    {
 text=text.trim();
    }
   
    console.log('the text is :',text);

    await expect(heading).toBeVisible();
    await expect(text).toBe('Congratulations! You must have the proper credentials.');

})