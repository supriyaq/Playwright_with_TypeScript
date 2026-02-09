//Auto Suggest dropDown//

import{test,expect,Locator} from '@playwright/test';
import { count } from 'console';

test('Auto Suggest Drop-Down',async({page})=>
{
    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(3000);


    const searchBox:Locator=await page.locator("input[name='q'][placeholder='Search for Products, Brands and More']");
    await page.waitForTimeout(3000);

    await searchBox.fill('Chocolates');
    await page.waitForTimeout(5000);

    const autoSuggested_Options:Locator=await page.locator("ul[class='_1sFryS _2x2Mmc _3ofZy1'] li[class='_3D0G9a']");

    const autoSuggested_Options_Text:string[]=await autoSuggested_Options.allTextContents();
    const autoSuggested_Options_Array:string[]=autoSuggested_Options_Text.map((text)=>
    {
        const ans=text.trim();
        return ans;
    })

    console.log('the options present in the auto Suggested Drop-Down are: ',autoSuggested_Options_Array);

    const length1:number=autoSuggested_Options_Array.length;
    const count1:number=await autoSuggested_Options.count();
    await expect(length1).toEqual(count1);

    console.log('the value of the length of array is :',length1);
    console.log('the count of elements present in the auto-suggested drop-down are: ',count1);


    const fifthElement_option:string|null=await autoSuggested_Options.nth(4).textContent();
    console.log('the element present on the 5th position is:',fifthElement_option);

    for(let i=0;i<count1;i++)
    {
        const option:Locator=await autoSuggested_Options.nth(i);
        const text:string|null=await option.innerText();

        if(text==='chocolate gift box')
        {
            await option.click();
            break;
        }

    }

    //span[@class='BUOuZu']
     await page.waitForTimeout(3000);
    const headingLocator:Locator=await page.locator("//span[normalize-space()='chocolate gift box']");
    await expect(headingLocator).toBeVisible();
     await page.waitForTimeout(3000);




    

    
})