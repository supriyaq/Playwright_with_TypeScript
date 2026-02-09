//to verify if the drop down is in sorted order or not//
import {test,expect,Locator} from '@playwright/test';

test('Verify Drop-down is sorted or Not',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // const colorsDropDown_Locator=await page.locator('select#colors option');
    // const colorsDropDown_Locator=await page.locator('select#animals option');
    const colorsDropDown_Locator=await page.locator('select#country option');

    const colorsDropDown_Text:string[]=await colorsDropDown_Locator.allTextContents();
    const colosDropDown_Array:string[]=colorsDropDown_Text.map((text)=>
    {
        const ans=text.trim();
        return ans;
    })

    console.log(colorsDropDown_Text);
    console.log(colosDropDown_Array)

    const properArray:string[]=colosDropDown_Array;
    const originalArray:string[]=[...properArray];
    const sortedArray:string[]=[...properArray].sort();

    console.log("Original Array: ",originalArray);
    console.log("Sorted Array : ",sortedArray);

    if(originalArray===sortedArray)
    {
        console.log('original array and sorted array are same...');
        await expect(originalArray).toEqual(sortedArray);
    }
    else
    {
        console.log('Original Array is not sorted...');
        await expect(originalArray).not.toEqual(sortedArray)
    }

    // await expect(originalArray).not.toEqual(sortedArray);
    // console.log('original and sorted array are not same...')


    // await expect(originalArray).toEqual(sortedArray)
})