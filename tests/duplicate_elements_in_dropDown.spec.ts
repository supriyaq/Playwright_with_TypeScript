import {test,expect,Locator} from'@playwright/test';

test('Verify dropDown contains duplicate elements',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // const colorsDropDown_locator:Locator=await page.locator('select#colors option');
    const colorsDropDown_locator:Locator=await page.locator('select#country option');
    const colorsDropDown_Text:string[]=await colorsDropDown_locator.allTextContents();
    const colorsDropDown_Array:string[]=colorsDropDown_Text.map((text)=>
    {
        const ans=text.trim();
        return ans;
    })

    console.log('the original array is:',colorsDropDown_Array);

    let uniqueElements=new Set<string>();
    let duplicateElements:string[]=[];

    for(let option of colorsDropDown_Array)
    {
        if(uniqueElements.has(option))
        {
            duplicateElements.push(option);
        }
        else
        {
            uniqueElements.add(option);
        }
    }

    


    const length1=duplicateElements.length;
    console.log(duplicateElements,length1)
    if(length1>0)
    {
        console.log('the dropdown contains duplicate elements');
    }else
    {
        console.log('.... no duplicate elements are present ....');
    }


    
await expect(duplicateElements).not.toEqual(0);


    await page.waitForTimeout(3000);

})