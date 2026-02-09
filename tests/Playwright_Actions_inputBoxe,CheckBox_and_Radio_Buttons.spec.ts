//Playwright Actions//
import {test,expect,Locator} from '@playwright/test';

test('Input Actions',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const inputBox_locator:Locator=await page.locator('input#name');
    await expect(inputBox_locator).toBeVisible();
    await expect(inputBox_locator).toBeEnabled();


    const attribute1:string|null=await inputBox_locator.getAttribute('maxlength');
    console.log('the maximum characters that can be entered into the textBox are:',attribute1);

    await expect(attribute1).toBe('15');


    await inputBox_locator.fill('Supriya Sharma');
    const text1:string=await inputBox_locator.inputValue();
    console.log('the text entered into the input box is:',text1);

    await expect(text1).toBe('Supriya Sharma');
    await page.waitForTimeout(3000);

})


test('Radio Buttons Actions',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio_Button_Locator:Locator=await page.locator('input#male');

    await expect(maleRadio_Button_Locator).toBeVisible();
    await expect(maleRadio_Button_Locator).toBeEnabled();

    const status1:boolean=await maleRadio_Button_Locator.isChecked();
    await expect(status1).toBeFalsy();
    console.log('the radio button is not checked yet..')

    await maleRadio_Button_Locator.check();

    const status2:boolean=await maleRadio_Button_Locator.isChecked();
    await expect(status2).toBeTruthy();
    console.log('the radio button is checked...');


    await expect(maleRadio_Button_Locator).toBeChecked();


    
    
    await page.waitForTimeout(3000);

})



test.only('CheckBox Actions',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // const Sunday_Locator:Locator=await page.getByLabel('Sunday');

    // await expect(Sunday_Locator).toBeVisible();
    // await expect(Sunday_Locator).toBeEnabled();
    // await expect(Sunday_Locator).not.toBeChecked();

    // await Sunday_Locator.check();
    // await expect(Sunday_Locator).toBeChecked();

    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const checkBox_locator:Locator[]=days.map((index)=>
    {
        const ans=page.getByLabel(index);
        return ans;
    })

    const length_:number=checkBox_locator.length;
    console.log('the number of days are :',length_);
    await expect(length_).toBe(7)

    /* for(let checkbox of checkBox_locator)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(3000);


    const newArray:Locator[]=await checkBox_locator.slice(-3);
    for(let locator$ of newArray)
    {

        await locator$.uncheck();
        await expect(locator$).not.toBeChecked();

    }


    await page.waitForTimeout(3000);


    for(let checkBox of checkBox_locator)
    {
        const status:boolean=await checkBox.isChecked();
        if(status)
        {
            await checkBox.uncheck();
            await expect(checkBox).not.toBeChecked();
        }
        else
        {
            await checkBox.check();
            await expect(checkBox).toBeChecked();

        }
    }

    await page.waitForTimeout(3000); */

    /* const index:number[]=[1,3,6];

    for(let i of index)
    {
        const input1:Locator=await checkBox_locator[i];
        await input1.check();
        await expect(input1).toBeChecked();
    }

    await page.waitForTimeout(3000); */

    //Select the check box based on the label

    const weekName='Friday'

    for(let day of days)
    {
        if(day===weekName)
        {
         const targetLocator:Locator=await page.getByLabel(day);
            await targetLocator.check();
            await expect(targetLocator).toBeChecked();

        }
    }

    await page.waitForTimeout(5000);

})