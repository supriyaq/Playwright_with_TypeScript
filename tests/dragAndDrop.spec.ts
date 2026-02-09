import{test,expect,Locator} from '@playwright/test';

test('Drag And Drop',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    const sourceElement:Locator=await page.locator("div#draggable");
    const targetElement:Locator=await page.locator("div#droppable");

//Approach 1: Mouse over and drag manually//
    /* 
    await sourceElement.hover();
    await page.mouse.down();

    await targetElement.hover();
    await page.mouse.up(); */

    //Approach 2: Direct approach:

    await sourceElement.dragTo(targetElement);

    await page.waitForTimeout(4000);


})