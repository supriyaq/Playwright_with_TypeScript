//JQuery date Picker using functions//

import{test,expect,Locator,Page} from '@playwright/test';

async function selectDate(targetYear_:string,targetMonth_:string,targetDate_:string,page:Page,status:Boolean)
{

    while(true)

        {
            const Month:Locator=await page.locator("span.ui-datepicker-month");
            const Year:Locator=await page.locator("span.ui-datepicker-year");

            const Month_:string|null=await Month.innerText();
            const Year_:string|null=await Year.innerText();


            if(Month_===targetMonth_  && Year_===targetYear_)
            {
                break;
            }

            if(status)
            {
                  //future Button
            const nextButton:Locator=await page.getByText('Next');
            await nextButton.click();
          }
          else
          {
            //past Button
             const pastButton:Locator=await page.getByText('Prev', { exact: true });
             await pastButton.click();


          }
}

        //selecting the dates//
        const dates_:Locator=await page.locator("table.ui-datepicker-calendar tbody tr td a");
        const dates:Locator[]=await dates_.all();

        for(let date of dates)
        {
            const ans:string|null=await date.innerText();

            if(ans===targetDate_)
            {
                await date.click();
            }
        }


    

}


test("Select date using function ",async({page})=>
{

    const futureDate:string="03/30/2027";
    const pastDate:string="07/27/2016";

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    const datePicker1:Locator=await page.locator("input#datepicker");
     await datePicker1.click();

    //  await selectDate("2027","March","30",page,true);
    await selectDate("2016","July","27",page,false)

     const value1:string=await datePicker1.inputValue();
     console.log("the value of the date is:",value1);

     await page.waitForTimeout(3000);


    //  await expect(value1).toBe(futureDate);
    await expect(value1).toBe(pastDate)
})