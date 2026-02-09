//JQuery date Picker//

import{test,expect,Locator} from '@playwright/test';

test(" JQuery date Picker ",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const datePicker1:Locator=await page.locator("input#datepicker");
    await expect(datePicker1).toBeVisible();
    

    // const date1:string="02/12/1995"


    //1. using fill method//
    /* await datePicker1.fill(date1);
    await page.waitForTimeout(3000);


    const value1:string=await datePicker1.inputValue();
    console.log("the value in the dtaepicker 1 is:",value1);
    await expect(value1).toBe(date1); */

    //2. by using date Picker itself 
    await datePicker1.click();
    const targetYear:string="2012";
    const targetMonth:string="November";
    const targetDate:string="23";

    while(true)

        {
            const Month:Locator=await page.locator("span.ui-datepicker-month");
            const Year:Locator=await page.locator("span.ui-datepicker-year");

            const Month_:string|null=await Month.innerText();
            const Year_:string|null=await Year.innerText();


            if(Month_===targetMonth  && Year_===targetYear)
            {
                break;
            }


          /*   //future Button
            const nextButton:Locator=await page.getByText('Next');
            await nextButton.click(); */


            //past Button
             const pastButton:Locator=await page.getByText('Prev', { exact: true });
             await pastButton.click();

        }

        //selecting the dates//
        const dates_:Locator=await page.locator("table.ui-datepicker-calendar tbody tr td a");
        const dates:Locator[]=await dates_.all();

        for(let date of dates)
        {
            const ans:string|null=await date.innerText();

            if(ans===targetDate)
            {
                await date.click();
            }
        }



        await page.waitForTimeout(2000);
        const date1:string=await datePicker1.inputValue();

        //future validations
        /* 
        const value1:string="05/23/2030";

        await expect(date1).toBe(value1);

        console.log("the value of vaue1: ",value1);
        console.log("the value of date1 is:",date1);
     */

        //past validations
        const value2:string="11/23/2012";

        await expect(date1).toBe(value2);

        console.log("the value of vaue1: ",value2);
        console.log("the value of date1 is:",date1);
    





    await page.waitForTimeout(5000);
})