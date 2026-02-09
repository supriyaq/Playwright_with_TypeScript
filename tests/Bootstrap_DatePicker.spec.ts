import {test,expect,Locator} from '@playwright/test';

test(" Select the chekIn and checkOut Date",async({page})=>
{
    await page.goto("https://www.booking.com/index.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AqTIzskGwAIB0gIkODNlMzRkNzItZGY5My00Njk1LTkzYzUtODkwMmZjMDA0NTc12AIB4AIB&sid=a20d373327c9ac3922b9662d0ff29a17&keep_landing=1&sb_price_type=total&");

    await page.waitForTimeout(4000);

    //page.getByRole('button', { name: 'Dismiss sign in information.' })
    //page.getByRole('button', { name: /Dismiss sign in information\./i })
    const crossIcon:Locator=await page.locator("button[aria-label='Dismiss sign in information.']")
    await crossIcon.click();
     await page.waitForTimeout(4000);

    // const searchBox:Locator=await page.locator("button[data-testid='searchbox-dates-container']");
    const searchBox:Locator=await page.getByRole('button', { name: 'Check-in date — Check-out date' });
    await searchBox.click();

    //==========================CHECK IN======================//
    const checkInYear="2026";
    const checkInMonth="September";
    const checkInDate="25";

    while(true)
    {
        const table1_Heading:Locator=await page.locator("h3[aria-live='polite']").nth(0);
        const text:string=await table1_Heading.innerText();
        const Array1:string[]=text.split(" ");
        const Month:string=await Array1[0];
        const Year:string=await Array1[1];

        if(Month===checkInMonth  && Year===checkInYear)
        {
            break;
        }

        const futureButton:Locator=await page.locator('button[aria-label="Next month"]');
        await futureButton.click();
}

let  status_checkIn=false;

const table1_body:Locator=await page.locator("table.b8fcb0c66a tbody").nth(0);
const table1_dates_:Locator=await table1_body.locator("tr td span");
const table1_dates:Locator[]=await table1_dates_.all();

for(let date of table1_dates)
{
    const ans=await date.innerText();
    if(ans===checkInDate)
    {
        await date.click();
        status_checkIn=true;
        break;
    }
}

await page.waitForTimeout(3000);
await expect(status_checkIn).toBeTruthy();





//=====================CHECK out ==================//
const checkOutYear="2026";
    const checkOutMonth="October";
    const checkOutDate="7";

    while(true)
    {
        const table1_Heading:Locator=await page.locator("h3[aria-live='polite']").nth(1);
        const text:string=await table1_Heading.innerText();
        const Array1:string[]=text.split(" ");
        const Month:string=await Array1[0];
        const Year:string=await Array1[1];

        if(Month===checkOutMonth  && Year===checkOutYear)
        {
            break;
        }

        const futureButton:Locator=await page.locator('button[aria-label="Next month"]');
        await futureButton.click();
}

let  status_checkOut=false;

const table2_body:Locator=await page.locator("table.b8fcb0c66a tbody").nth(1);
const table2_dates_:Locator=await table2_body.locator("tr td span");
const table2_dates:Locator[]=await table2_dates_.all();

for(let date of table2_dates)
{
    const ans=await date.innerText();
    if(ans===checkOutDate)
    {
        await date.click();
        status_checkOut=true;
        break;
    }
}

await page.waitForTimeout(3000);
await expect(status_checkOut).toBeTruthy();







    await page.waitForTimeout(4000);
})