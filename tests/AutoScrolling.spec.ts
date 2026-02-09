/*
Most of the time,Playwright will automatically scroll for you before doing any actions.
Therefore, you do not need to scroll explicitly.
*/

import{test,expect,Locator} from '@playwright/test';

test('Scrolling to Footer Sections',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(2000);

    const footer:Locator=await page.locator("div.footer-disclaimer");
    const footerText:string=await footer.innerText();

    console.log("The text present on the footer is :",footerText);

    await page.waitForTimeout(3000);
})


test('Select an Item from the Drop-Down',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    const dropDown:Locator=await page.locator("input#comboBox");
    await dropDown.click();

    const targetOption:Locator=await page.getByText('Item 97');
    await targetOption.click();


    const option_Text:string=await targetOption.innerText();
    console.log("the selected option is:",option_Text);



    await page.waitForTimeout(4000);
})

test.only('Selecting the data of an element from a table',async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html");
    await page.waitForTimeout(3000);

    const lastName:Locator=await page.locator("table#example tbody tr:nth-child(10) td:nth-child(2)");

    const email:Locator=await page.locator("table#example tbody tr:nth-child(10) td:last-child");

    const lastName_Text=await lastName.innerText();
    const email_Text=await email.innerText();

    console.log('Last Name is:',lastName_Text);
    console.log('email Address is:',email_Text);



    await page.waitForTimeout(4000);
})