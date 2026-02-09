// CSS Locators 
/*
html +JavaScript +css

css is faster than xpath

2 types of css:

1.) absolute css locator
2.) relative css locator

some generic methods of using css:
1.tag with id ====> tag#id ===> #id

2.tag with class ====> tag.class  ====> .class

3.tag with any other attribute (other than id and class) ====>tag[attribute=value] ===>.class[attribute=value]

4.tag with class and any other attribute====> tag.class[attribute=value] ====> .class[attribute=value]


page.locator(css/xpath)

*/




import { expect,test,Locator } from "@playwright/test";

test("Verify Css Locator",async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

//1. tag with id
    // const searchBox=await page.locator("input#small-searchterms");

    // await expect(searchBox).toBeVisible();

    // await searchBox.fill("... Saurabh Genda Hai... ");




    //2.tag with class
    // const searchBox=await page.locator("input.search-box-text");
    // await expect(searchBox).toBeVisible();
    // await searchBox.fill(" Css Locator...")


    //3.tag with any other attribute
    // const searchBox=await page.locator("input[name='q']");
    // await expect(searchBox).toBeVisible();
    // await searchBox.fill(" !!! Hello World !!!");



    //4. Tag with class and any other attribute
    const searchBox=await page.locator("input.search-box-text[value='Search store']");
    await expect(searchBox).toBeVisible();
    await searchBox.fill(" Hello this is tag with class and any other attribute ");
    


    await page.waitForTimeout(5000);
})
