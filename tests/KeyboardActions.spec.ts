/*
Keyboard Methods:
insertText
down
press
type
up

await page.keyboard('key')
*/

import{test,expect,Locator} from '@playwright/test';
test('Keyboard Actions',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    const Input1Box:Locator=await page.locator("input#input1");




    //1.Focus on the First Input Box
    await Input1Box.focus();


    //2. Pass the text Into the Input Box 1 
    await page.keyboard.insertText('Welcome to the Hell !!!...')


    //3.Control+A--> select the text from input 1 box
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');


    //4.Control +C--> copy the text from input 1 box
    await page.keyboard.down('Control');
    await page.keyboard.press('C');
    await page.keyboard.up('Control');


    //5.Press Tab 2 times
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    await page.keyboard.press('Tab');


    //6.Control+V
     await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');


    //7.Press Tab 2 Times
    await page.keyboard.press('Tab');

    await page.keyboard.press('Tab');



    //8.Control+v
    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');

    await page.waitForTimeout(3000);
})

test.only('Simple way keyboard Actions',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    const inputBox1:Locator=await page.locator("input#input1");

    await inputBox1.click();
    await page.keyboard.type('!!! ... Happy Ending ... !!!');

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

     await page.keyboard.press('Control+V');

     await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

      await page.keyboard.press('Control+V');




    await page.waitForTimeout(3000);
})