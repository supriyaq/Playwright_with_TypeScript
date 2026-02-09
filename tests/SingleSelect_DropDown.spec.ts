//Single Select Drop Down//

import{test,expect,Locator} from '@playwright/test';

test('Single Select Drop Down',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const countryDropDown_Locator:Locator=await page.locator('select#country');

    //select option//
    //1. select by visible text present on the screen
    await countryDropDown_Locator.selectOption('United Kingdom');
    await page.waitForTimeout(3000);


    //2.select option by value attribute
    await countryDropDown_Locator.selectOption({value:'australia'});
    await page.waitForTimeout(3000);

    //3.select option by label
    await countryDropDown_Locator.selectOption({label:'Brazil'});
    await page.waitForTimeout(3000);

    //4.select option by using index//
    await countryDropDown_Locator.selectOption({index:4});
    await page.waitForTimeout(3000);

    //how to check number of optionsin the drop-down//
    const options_Locator:Locator=await page.locator('select#country option');
    await expect(options_Locator).toHaveCount(10);

    const country_Options_Text:string[]=await options_Locator.allTextContents();
    console.log('the text of all available options are:',country_Options_Text);

    const country_Array:string[]=country_Options_Text.map((text)=>
    {
        const ans=text.trim();
        return ans;
    })

    const length1=country_Array.length;
    console.log('the length of array is :',length1);

    console.log('after removing the spaces :',country_Array);
    await page.waitForTimeout(3000);


    //3. check an option is present in the drop-down//
    await expect(country_Array).toContain('Japan');
    console.log('the option japan is present in the drop-down');

    //4.print all the options in the console window//
    console.log('using for of loop to print all the options')
    for(let option of country_Array)
    {
        console.log(option)
    }


})