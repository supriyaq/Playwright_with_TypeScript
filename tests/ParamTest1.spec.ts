//Parameterized Test//
import { test, expect, Locator } from '@playwright/test';

test.skip('Login Test', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(3000);

    const searchBox: Locator = await page.locator("#small-searchterms");
    const searchButton: Locator = await page.locator("input[value='Search']");


    await searchBox.fill('Gift Card');
    await searchButton.click();

    const products_: Locator = await page.locator("h2[class='product-title'] a");
    const allProducts: Locator[] = await products_.all();

    const targetProduct: Locator = await allProducts[0];
    const productName: string | null = await targetProduct.textContent();


    console.log('The name of product is:', productName);

    await expect(productName).toBe('$100 Physical Gift Card');

})






/*

test.describe('Search Functionality', async () => {

    const searchItems: string[] = ['Laptop', 'Gift Card', 'Smartphone', 'Monitor'];
    for (let item of searchItems) {
        // console.log(item);


        test(`Search Functionality using for loop ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.waitForTimeout(3000);

            const searchBox: Locator = await page.locator("#small-searchterms");
            const searchButton: Locator = await page.locator("input[value='Search']");


            await searchBox.fill(item);
            await searchButton.click();

            const products_: Locator = await page.locator("h2[class='product-title'] a");


            const allProducts: Locator[] = await products_.all();

            const targetProduct: Locator = await allProducts[0];
            const productName: string | null = await targetProduct.textContent();


            console.log('The name of product is:', productName);



            await expect(productName).toContain(item);




        })

    }




})

*/



//using for each function

test.describe('Search Functionality using for Each function', async () => {
    const searchItems: string[] = ['Laptop', 'Gift Card', 'Smartphone', 'Monitor'];

    searchItems.forEach((item) => {

        test(`Search Functionality for ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.waitForTimeout(3000);

            const searchBox: Locator = await page.locator("#small-searchterms");
            const searchButton: Locator = await page.locator("input[value='Search']");


            await searchBox.fill(item);
            await searchButton.click();

            const products_: Locator = await page.locator("h2[class='product-title'] a");


            const allProducts: Locator[] = await products_.all();

            const targetProduct: Locator = await allProducts[0];
            const productName: string | null = await targetProduct.textContent();


            console.log('The name of product is:', productName);



            await expect(productName).toContain(item);




        })

    })
})
