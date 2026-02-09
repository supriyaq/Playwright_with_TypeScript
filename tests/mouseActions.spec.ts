import{test,expect,Locator} from '@playwright/test';

test('Mouse Hover',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    const poinMe_Button=await page.locator('button.dropbtn');
    await poinMe_Button.hover();
     await page.waitForTimeout(3000);

     const Laptop_Option:Locator=await page.locator("div.dropdown-content a:nth-child(2)");
     await Laptop_Option.hover();



    await page.waitForTimeout(3000);
})


test('Right Click',async({page})=>
{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.waitForTimeout(2000);

    const RightClick_Button:Locator=await page.locator("span.context-menu-one");
    await RightClick_Button.click({button:'right'});

    await page.waitForTimeout(4000);
})

test('Double Click',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    const field1:Locator=await page.locator("input#field1");
    const field2:Locator=await page.locator("input#field2");
    const copyText:Locator=await page.locator("button[ondblclick='myFunction1()']");

    await field1.clear();
    await field1.fill('Jatin Goyal');


    await copyText.dblclick();
    const text1=await field1.inputValue();
    const text2=await field2.inputValue();

    await expect(text1).toBe(text2);

    await page.waitForTimeout(4000);
})

