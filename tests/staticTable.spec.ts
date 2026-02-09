import {test,expect,Locator} from '@playwright/test';

test('Static Table',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);


    const tableElement:Locator=await page.locator("table[name='BookTable'] tbody");
    await expect(tableElement).toBeVisible();

    //1. count number of rows
    // const rows:Locator=await page.locator("table[name='BookTable'] tbody tr"); //returns all the rows in the form of locator//
    const rows:Locator=await tableElement.locator('tr');
 const rows_Count:number= await rows.count();
 await expect(rows).toHaveCount(7);
 await expect(rows_Count).toBe(7);

 console.log("The number of rows in the table are:",rows_Count);

 //count number of columns//
//  const columns:Locator=await page.locator("table[name='BookTable'] tbody tr th");
 const columns:Locator=await rows.locator("th");

 const column_Count:number=await columns.count();
 await expect(column_Count).toBe(4);
 await expect(columns).toHaveCount(4);

 console.log('the number of columns are: ',column_Count);


 //3 Read data from second row
 const secondRow:Locator=await rows.nth(1).locator("td");
 const data1:string[]=await secondRow.allInnerTexts();
 console.log(data1);

 console.log('printing all data using for of loop')
 for(let data of data1)
 {
    console.log(data)
 }
 
 await expect(secondRow).toHaveText([ 'Learn Selenium', 'Amit', 'Selenium', '300' ])



 //4 read all the data from the table//
 const rows_array_Locator:Locator[]=await rows.all();
 console.log('the rows locator are:',rows_array_Locator);
 console.log("BookName Author  Subject Price")
 for(let row of rows_array_Locator.slice(1))
 {
    const currentRow:Locator=await row.locator("td");
    const text1:string[]=await currentRow.allInnerTexts();
    console.log(text1.join('\t'));
 }



 //5.print book Names where name of author is 'Mukesh'
 const bookArray:string[]=[];
 let count:number=0;
 console.log(" ");
 console.log(" ");
 console.log('print the names of books whose author is Mukesh...');
 for(let row of rows_array_Locator.slice(1))
 {
    const currentRow:Locator=await row.locator("td");
    const text1:string[]=await currentRow.allInnerTexts();

    const authorName:string=await text1[1];
    const bookName:string=await text1[0];

    if(authorName==='Mukesh')
    {
        bookArray.push(bookName);
        count++;
        console.log('the name of book is:',bookName)

        
    }
    
    
 }

 console.log('the books written by mukesh are :',bookArray);
 console.log('the number of books written by mukesh are:',count);
 await expect(count).toBe(2);
 await expect(bookArray.length).toBe(2);
 await expect(bookArray).toHaveLength(2);



 //5.total price of all the books//
let totalPrice=0;
 console.log(" ");
 console.log(" ");
 console.log('calculate the price of all the books:');
 for(let row of rows_array_Locator.slice(1))
 {
    const currentRow:Locator=await row.locator('td');
    const data1:string[]=await currentRow.allInnerTexts();

    let price_string:string=data1[3];
    let price_number:number=Number(price_string);

    totalPrice=totalPrice+price_number;
 }

 console.log('the price of all the books present in the table is:',totalPrice);
 await expect(totalPrice).toBe(7100);




    await page.waitForTimeout(3000);
})