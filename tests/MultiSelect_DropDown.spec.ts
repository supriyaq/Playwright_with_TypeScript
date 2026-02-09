//Multi Select Drop Down//

import {test,expect,Locator} from '@playwright/test';

test('MultiSelect Drop-Down',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
     const colorsDroDown_Locator:Locator=await page.locator('select#colors');
    

    //1. select option by visible text
    await colorsDroDown_Locator.selectOption(['Red','Blue','Green']);


    //2.select option by using value attribute//
    await colorsDroDown_Locator.selectOption(['red','white','green']);
        // 

        //3.select option by using label//
        await colorsDroDown_Locator.selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]);
        // await page.waitForTimeout(5000);

        //4.select option by using index//
        await colorsDroDown_Locator.selectOption([{index:0},{index:1},{index:2}]);
        // await page.waitForTimeout(6000);

        //count the numer of options present in the drop-down//
        const colorsDropDown_options:Locator=await page.locator('select#colors option');

        await expect(colorsDropDown_options).toHaveCount(7);

        const colorsDropDown_options_Text:string[]=await colorsDropDown_options.allTextContents();

        const colorsArrays:string[]=colorsDropDown_options_Text.map((text)=>
        {
            const ans=text.trim();
            return ans;
        })

        console.log('colors array is :',colorsArrays);
        await expect(colorsArrays).toContain('Green');
        console.log('Green color is present in the array !!!!!!!!!')

        console.log('printing options using for of loop...');
        for(let option of colorsArrays)
        {
            console.log(option)
        }

   


})