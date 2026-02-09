//Hidden_Bootstrap drop down

import{test,expect,Locator} from '@playwright/test';

test('Hidden Bootstrap Drop-Down',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);

    const userName:Locator=await page.locator("input[name='username']");
    const password:Locator=await page.locator("input[name='password']");
    const login_Button:Locator=await page.locator("button[type='submit']");

    await userName.fill('Admin');
    await password.fill('admin123');
    await login_Button.click();

    await page.waitForTimeout(3000);

    const PIM:Locator=await page.getByText('PIM');
    await PIM.click();
    
    await page.waitForTimeout(3000);
    

    const dropDown_Options:Locator=await page.locator("div[class='oxd-grid-4 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] i");

    const jobTitle_DropDown:Locator=await dropDown_Options.nth(2);
    await jobTitle_DropDown.click();
     await page.waitForTimeout(5000);

    const allOptions_JobTitle:Locator=await page.locator("div[role='listbox'] div[role='option'] span");

    const allOptions_Array:string[]=await allOptions_JobTitle.allTextContents();
    const allOptions_text:string[]=allOptions_Array.map((text)=>
    {
        const ans=text.trim();
        return ans;
    })

    console.log('all the options present in the drop-down are:',allOptions_text);
    for(let option of allOptions_Array)
    {
        console.log(option)
    }

    await page.waitForTimeout(3000);

    const count1:number=await allOptions_JobTitle.count();
    const length1:number=allOptions_text.length;

    await expect(count1).toEqual(length1);

    console.log('the number of options present in the drop-down are:',count1);
    console.log('the length of the array is :',length1);

    for(let i=0;i<count1;i++)
    {
        const option:Locator=await allOptions_JobTitle.nth(i);
        const text:string|null=await option.textContent();

        if(text==='Automaton Tester')
        {
            await option.click();
            break;
        }
    }

await page.waitForTimeout(2000);
    

})