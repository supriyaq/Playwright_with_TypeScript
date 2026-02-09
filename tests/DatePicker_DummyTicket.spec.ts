// /Dummy Ticket Booking//

import {test,expect,Locator,Page} from '@playwright/test';

async function SelectDate(targetYear_:string,targetMonth_:string,targetDate_:string,page:Page)
{
    const Year:Locator=await page.locator("select.ui-datepicker-year");
    await Year.selectOption({label:targetYear_});

    const Month:Locator=await page.locator("select.ui-datepicker-month");
    await Month.selectOption({label:targetMonth_});

   const dates_:Locator=await page.locator("table.ui-datepicker-calendar tbody tr td a");
   const dates:Locator[]=await dates_.all();
   for(let date of dates)
   {
    const ans=await date.innerText();
    if(ans===targetDate_)
    {
        await date.click();
    }
   }



}

test("Dummy Ticket Booking !!!",async({page})=>
{
    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    await page.waitForTimeout(3000);

    const Dummy_ticket_and_hotel:Locator=await page.locator("input#product_3186");
    await Dummy_ticket_and_hotel.click();
    await page.waitForTimeout(4000);

    const firstName:Locator=await page.locator("input#travname");
    await firstName.fill("Supriya");

    const lastName:Locator=await page.locator("input#travlastname");
    await lastName.fill("Saraswat");

    const dob_DropDown:Locator=await page.locator("input#dob");
    await dob_DropDown.click();
    await SelectDate("1995","Jun","12",page);

    const sex:Locator=await page.locator("input#sex_2");
    await sex.click();

    const tripType:Locator=await page.locator("input#traveltype_2");
    await tripType.click();

    const FromCity:Locator=await page.locator("input#fromcity");
    await FromCity.fill("Mathura");

    const ToCity:Locator=await page.locator("input#tocity");
    await ToCity.fill("Banaras");

    const departureDate:Locator=await page.locator("input#departon");
    await departureDate.click();
    await SelectDate("2026","Jan","8",page);

    const phoneNumber:Locator=await page.locator("input#billing_phone");
    await phoneNumber.fill("9068160434");
    
    
    const email:Locator=await page.locator("input#billing_email");
    await email.fill("supriya@yopmail.com");

    const country:Locator=await page.locator("select#billing_country");
    await country.selectOption({value:'IN'});

    const Address:Locator=await page.locator("input#billing_address_1");
    await Address.fill("HNO-13 ANANDLOK COLONY GOVERDHAN ROAD");

    const city:Locator=await page.locator("input#billing_city");
    await city.fill("Mathura");

    const state:Locator=await page.locator("select#billing_state");
    await state.selectOption({value:'UP'});

    const pincode:Locator=await page.locator("input#billing_postcode");
    await pincode.fill("281004");

    const targetHeading:Locator=await page.locator("div.product-details");
    const targetHeading_Text:string=await targetHeading.innerText();
    const targetText:string="Dummy ticket and hotel";

    const targetPrice:Locator=await page.locator("td strong span.woocommerce-Price-amount");
    const targetPrice_Text:string=await targetPrice.innerText();
    const priceText:string="₹2,750";
    console.log("the amount is: ",targetPrice_Text);
    console.log("the targetHeading is:",targetHeading_Text);

    await expect(targetHeading_Text).toBe(targetText);
    await expect(priceText).toBe(targetPrice_Text);





    await page.waitForTimeout(4000);
})
