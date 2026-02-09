// Assignment 1 for Date Picker 
import{test,expect,Locator} from '@playwright/test';

test(" Date Picker Assignment 1",async({page})=>
{

    const targetYear="2030";
    const targetMonth="Apr";
    const targetDate="19";

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    const datePicker2:Locator=await page.locator("input#txtDate");
    await datePicker2.click();

    const Year:Locator=await page.locator("select.ui-datepicker-year");
    await Year.selectOption({label:targetYear});

    const Month:Locator=await page.locator("select.ui-datepicker-month");
    await Month.selectOption({label:targetMonth});

    const dates_:Locator=await page.locator("table.ui-datepicker-calendar tbody tr td a");
    const dates:Locator[]=await dates_.all();

    for(let date of dates)
    {
        const ans=await date.innerText();

        if(ans===targetDate)
        {
            await date.click();
            break;
        }
    }

    await page.waitForTimeout(3000);

    const valueOfDate:string=await datePicker2.inputValue();
    console.log("the value of date is :",valueOfDate);


    const targetDate_1:string="19/04/2030";
    await expect(targetDate_1).toBe(valueOfDate);





    await page.waitForTimeout(4000);
})