import{test,expect,Locator, chromium,Page} from '@playwright/test';
let page:Page


test('Verify the logo',async()=>
{
   const logo:Locator=await page.locator("//img[@alt='Tricentis Demo Web Shop']");
   await expect(logo).toBeVisible();
    
})


test('Verify the title of the page',async()=>
{
    const title1=await page.title();
    await expect(page).toHaveTitle(title1);

})



test('Search Functionality Test',async()=>
{
    const searchBox:Locator=await page.locator("#small-searchterms");
    const searchButton:Locator=await page.locator("input[value='Search']");


    await searchBox.fill('Laptop');
    await searchButton.click();

    const searchItems:Locator=await page.locator("h2[class='product-title'] a");
    const allItems:Locator[]=await searchItems.all();

    const firstProduct:Locator=await allItems[0];
    const productName:string|null=await firstProduct.textContent();

    await expect(productName).toContain('14.1-inch Laptop');


})



test.beforeEach('Open the Application',async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    page=await context.newPage();

    await page.goto('https://demowebshop.tricentis.com/');
    
})

test.afterEach('Close the Application',async()=>
{
    await page.close();
})