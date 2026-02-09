//Annotations//
/*
1.skip
2.only
3.fixme
4.fail
5.slow

*/

import{test,expect,Locator} from '@playwright/test';

test('Only Annotation',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    const loginLink:Locator=await page.locator("#login2");
        await loginLink.click();
    
        const userName:Locator=await page.locator("#loginusername");
        await userName.fill('pavanol');
    
        const password:Locator=await page.locator("#loginpassword");
        await password.fill('test@123');
    
        const LoginButton:Locator=await page.locator("button[onclick='logIn()']");
        await LoginButton.click();
    
        await page.waitForTimeout(3000);

        const text:string|null=await page.locator("#nameofuser").textContent();
        const name=await text?.trim();

        await expect(name).toContain('Welcome pavanol');

})

test.skip('Direct Skip Method',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')

})



//skip the test based on some condition//
test('skip based on condition',async({page,browserName})=>
{
    test.skip(browserName==='chromium')

    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')

})


//we can fail the test
test.fail('fail functionality',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')
})


//fixme test==> when the functionality is fully not working the fucntionality is still needs to be implemented//

//fixme me also a skipping the test as it is not completed or partially completed
test.fixme('fixme functionality',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')
})


test('slow functionality',async({page})=>
{
    test.slow()// it will triple the time of that particular test// default time out is 30 seconds and after applying slow it will become 90 seconds
    await page.goto("https://demoblaze.com/");
        await page.waitForTimeout(3000);
    const allElements:Locator=await page.locator("div#tbodyid h4");
        const allHeadings:Locator[]=await allElements.all();
    
        const count=await allHeadings.length;
        console.log('the number of elements present on the page are:',count);
    
        for(let item of allHeadings)
        {
            const ans=await item.innerText();
            console.log(ans);
        }
    
        await expect(count).toBe(9);
})

