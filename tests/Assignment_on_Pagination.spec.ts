import{test,expect,Locator} from '@playwright/test';

test('Verify data on Pagination',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    const allRows:Locator=await page.locator("table#productTable tbody tr");
    const allRows_Array:Locator[]=await allRows.all();
    const numberOfpages:Locator=await page.locator("ul#pagination li");
    const pages:Locator[]=await numberOfpages.all();



    for(let page1 of pages)
    {
        await page1.click();
        await page.waitForTimeout(3000);

        for(let row of allRows_Array)
    {
         const checkbox:Locator=await row.locator("input[type='checkbox']");
         await checkbox.click();

         const data=await row.innerText();
         console.log(data);


}

    }
    




    await page.waitForTimeout(3000);
})


test.only(" flight Booking ",async({page})=>
{
    const originalArray:string[]=[];
    await page.goto("https://blazedemo.com/");
    await page.waitForTimeout(3000);

    const departureCity:Locator=await page.locator("select[name='fromPort']");
    await departureCity.selectOption({label:'Boston'});

    const destinationCity:Locator=await page.locator("select[name='toPort']");
    await destinationCity.selectOption({label:'London'});


    const findFlights_Button:Locator=await page.locator("input[type='submit']");
    await findFlights_Button.click();

    await page.waitForTimeout(3000);

    const flightDetailsPage:Locator=await page.locator("div[class='container'] h3");
    const headingText:string=await flightDetailsPage.innerText();
    console.log('the heading present on the flight details page:',headingText);

    const allRows:Locator=await page.locator("table.table tbody tr");
    const rows:Locator[]=await allRows.all();

    for(let row of rows)
    {
        const currentRow:Locator=await row.locator('td');
        const currentcells:Locator[]=await currentRow.all();
        const price:string=await currentcells[5].innerText();
        const ans:string=await price.slice(1);
        await originalArray.push(ans);

    }
     console.log("original array",originalArray);
     const sortedArray:string[]=await originalArray.sort();
     console.log("Sorted Array:",sortedArray);
     const lowestPrice:string=await sortedArray[0];

     for(let row of rows)
     {
        const data:string=await row.innerText();
        if(data.includes(lowestPrice))
        {
            const button:Locator=await row.locator("input[type='submit']");
            await button.click();
            break;
        }
     }


     await page.waitForTimeout(2000);
     const bookingDetailsPage:Locator=await page.locator("div[class='container'] h2");
     const bookingDetailPage_heading:string=await bookingDetailsPage.innerText();
     console.log("the heading on the flight Details page is:",bookingDetailPage_heading);
     await expect(bookingDetailPage_heading).toBe("Your flight from TLV to SFO has been reserved.");

     const name:Locator=await page.locator("input#inputName");
     await name.fill("Saurabh Kumar");

     const address:Locator=await page.locator("input#address");
     await address.fill("HNo-13 AnandLok Colony");

     const city:Locator=await page.locator("input#city");
     await city.fill("Mathura");


     const state:Locator=await page.locator("input#city");
     await state.fill("Uttar Pradesh");

     const ZipCode:Locator=await page.locator("input#zipCode");
     await ZipCode.fill("281004");

     const cardType:Locator=await page.locator("select#cardType");
     await cardType.selectOption({label:'American Express'});

     const creditCardNumber:Locator=await page.locator("input#creditCardNumber");
     await creditCardNumber.fill("1234123412341234");


     const month:Locator=await page.locator("input#creditCardMonth");
     await month.fill("11");

     const year:Locator=await page.locator("input#creditCardYear");
     await year.fill("2020");

     const nameOnCard:Locator=await page.locator("input#nameOnCard");
     await nameOnCard.fill("Saurabh Kumar");


     const rememberMe:Locator=await page.locator("input#rememberMe");
     await rememberMe.check();

     const purchaseFlightButton:Locator=await page.locator("input[type='submit'][value='Purchase Flight']");
     await purchaseFlightButton.click();
     await page.waitForTimeout(3000);

     const confirmationMessage:string=await page.locator("div[class='container hero-unit'] h1").innerText();
     console.log("the final confirmation Message is:",confirmationMessage);

     await expect(confirmationMessage).toBe("Thank you for your purchase today!")

    
     await page.waitForTimeout(3000);

})