//Example of hooks Concept//
/*
Open application
Login
Find the number of products
Logout


login
add the product to the cart
logout

login
verify if the product has been added to the cart
logout
close the application

*/

import{test,expect,Locator,Page, chromium} from '@playwright/test';

let page:Page;



test.describe('My Group',async()=>
{

    
test.beforeAll('Open the Application',async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    page=await context.newPage();

    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

})

test.beforeEach('Login Functionality',async()=>
{
    const loginLink:Locator=await page.locator("#login2");
    await loginLink.click();

    const userName:Locator=await page.locator("#loginusername");
    await userName.fill('pavanol');

    const password:Locator=await page.locator("#loginpassword");
    await password.fill('test@123');

    const LoginButton:Locator=await page.locator("button[onclick='logIn()']");
    await LoginButton.click();

    await page.waitForTimeout(3000);
})

test.afterEach("Logout Functionality",async()=>
{
    const logOutLink:Locator=await page.locator("#logout2");
    await logOutLink.click();
    await page.waitForTimeout(3000);
})


test.afterAll("close the Application",async()=>
{
    await page.close();
})

    
test('Find The number of Products on the Application',async()=>
{
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


test('Adding product to the cart',async()=>
{
    const targetProduct:Locator=await page.getByRole('link', { name: 'Sony xperia z5' });
    await targetProduct.click();

    await page.waitForTimeout(3000);

    page.on('dialog',async(dialog)=>
    {
        const dialog_type=await dialog.type();
        const dialog_message=await dialog.message();
        await expect(dialog_type).toBe('alert');
        await expect(dialog_message).toBe('Product added.');

        await dialog.accept();
    })

    const addTocart:Locator=await page.locator(".btn.btn-success.btn-lg");
    await addTocart.click();

    await page.waitForTimeout(3000);

})




test('Verify if the product is added to the cart',async()=>
{
    const cartLink:Locator=await page.getByRole('link', { name: 'Cart' });
    await cartLink.click();

    await page.waitForTimeout(3000);

    const rows_:Locator=await page.locator("tbody#tbodyid tr");
    const rows:Locator[]=await rows_.all();

    for(let row of rows)
    {
        const item_:Locator=await row.locator("td:nth-child(2)");
        const item:string=await item_.innerText();

        if(item==='Sony xperia z5')
        {
            console.log('the item is present in the cart !!!');
            break;
        }
    }

    await page.waitForTimeout(2000);


})

})



