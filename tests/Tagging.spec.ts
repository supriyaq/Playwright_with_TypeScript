//tagging//
import{test,expect,Locator} from '@playwright/test';


/*

Test 1--> sanity

Test 2-->regression

Test 3---> sanity/regression



*/




test('Verify the login and LogOut functionality',{tag:'@sanity'},async({page})=>
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

        const logOutLink:Locator=await page.locator("#logout2");
            await logOutLink.click();
            await page.waitForTimeout(3000);
});





test('Verify the URL and title of page',{tag:['@sanity',"@regression"]},async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')

})






test('Count the number of elements on the page',{tag:'@regression'} ,async({page})=>
{
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





/* test('@sanity @regression Verify the URL and title of page',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')

})
 */




/*
1.run the sanity test cases
-npx playwright test file_name --grep "@sanity" (use double quotes)



2. run the regression test cases
npx playwright test file_name --grep "@regression"



3. run only those which are both sanity & regression
(?=.*@sanity)(?=.*@regression)
-npx playwright test file_name "(?=.*@sanity)(?=.*@regression)"



4. run which is either sanity or regression both sanity and regression
-npx playwright test file_name "@sanity|@regression"



5. run only sanity
npx playwright test file_name --grep "@sanity"  --grep-invert "@regression"




6. run only regression
npx playwright test file_name --grep-invert "@regression"

npx playwright test file_name --grep "@regression"  --grep-invert "@sanity"


*/





