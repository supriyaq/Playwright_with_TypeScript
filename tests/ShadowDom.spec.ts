/*
All Locators in Playwright by default work with elements in shadow Dom.
The exceptions are:
Locaating by Xpath doesnot pierce shadow roots.

*/

import {test,expect,Locator} from '@playwright/test';

test('Shadow DOM',async({page})=>
{
    await page.goto("https://books-pwakit.appspot.com/");
    await page.waitForTimeout(3000);
    const inputBox:Locator=await page.locator("input#input");
    await inputBox.fill('Playwright Automation');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);

    const allElements:Locator=await page.locator('h2.title');
    const allBookHeadings:Locator[]=await allElements.all();
    const bookCount:number=await allBookHeadings.length;

    for(let book of allBookHeadings)
    {
        const ans=await book.textContent();
        console.log(ans);
    }

    await expect(bookCount).toBe(20);


    await page.waitForTimeout(3000);
})

test.only('Nested Shadow DOM elements',async({page})=>
{
    await page.locator('https://shop.polymer-project.org/');
    await page.waitForTimeout(3000);
// const SHOPNOW:Locator=await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]");
const SHOPNOW:Locator=await page.getByRole('link', { name: /Men's Outerwear Shop Now/i });
await SHOPNOW.click();
await page.waitForTimeout(3000);

const allElements:Locator=await page.locator("div.title");
const allShirts:Locator[]=await allElements.all();

const count:number=await allShirts.length;

for(let shirt of allShirts)
{
    const ans=await shirt.innerText();
    console.log(ans);
}

await expect(count).toBe(16);

    await page.waitForTimeout(3000);
})