import {test,expect,Locator} from '@playwright/test';

test('Xpath locator Demo',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. absolute  xpath
    // const logo_absolute_xpath:Locator=await page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    const logo_absolute_xpath:Locator=await page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

    await expect(logo_absolute_xpath).toBeVisible();


    //2.relative xpath
    const logo_relative_xpath:Locator=await page.locator("//img[@alt='Tricentis Demo Web Shop']");

    await expect(logo_relative_xpath).toBeVisible();

    const computer_Items:Locator=await page.locator("//h2//a[contains(@href,'computer')]");
    const computer_count:number=await computer_Items.count();
    console.log("the count of items that have computer keyword:", computer_count);
    await expect(computer_count).toBeGreaterThan(0);

    const text1:string|null=await computer_Items.first().textContent();
    const lastText:string|null=await computer_Items.last().textContent();
    const text3:string|null=await computer_Items.nth(2).textContent(); //index starts with zero

    console.log("Text 1: ",text1);
    console.log("Last Text: ",lastText);
    console.log("Text 3: ",text3);

    const allProducts:string[]=await computer_Items.allTextContents();
    for(let product of allProducts)
    {
        console.log(product)
    }

console.log(" ")
console.log(" ");
console.log("all the products having build as the first product...")
    const Build_starting_elements:Locator=await page.locator("//h2//a[starts-with(@href,'/build')]");

    const build_count:number=await Build_starting_elements.count();
    console.log("the elements having build as the starting keyword:",build_count);

    await expect(build_count).toBeGreaterThan(0);
    await expect(build_count).toBe(3);


    const allBuild_products=await Build_starting_elements.allTextContents();
    for(let build of allBuild_products)
    {
        console.log(build);
    }



    const register_link:Locator=await page.locator("//a[normalize-space()='Register']");
    const register_link_text:string|null=await register_link.textContent();

    await expect(register_link).toBeVisible();
    await expect(register_link_text).toBe("Register");

    console.log(register_link_text);


    //last () function==> selects the last element in a set of matching nodes.
    //capturing the 4th element
    const youtubeElement:Locator=await page.locator("//div[@class='column follow-us']//ul//li[position()=4]");
    const youTube_text:string|null=await youtubeElement.textContent();

    await expect(youtubeElement).toBeVisible();
    await expect(youTube_text).toBe("YouTube");

    const lastElement_google:Locator=await page.locator("//div[@class='column follow-us']//ul//li[last()]");
    const lastElement_textContent:string|null=await lastElement_google.textContent();
    await expect(lastElement_google).toBeVisible();
    await expect(lastElement_textContent).toBe("Google+");

    console.log(lastElement_textContent)


})