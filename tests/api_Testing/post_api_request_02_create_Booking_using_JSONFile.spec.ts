/*
Test:Create Booking
Request type:Post
Request body:Json File

*/

import {test,expect} from '@playwright/test';
import fs from 'fs';

const JsonFilePath="TestData_Folder/post_request_body.json";


const data1:any=JSON.parse(fs.readFileSync(JsonFilePath,'utf-8'));

test('Create Post Request using static body',async({request})=>
{


   const responseData=await request.post("/booking",{data:data1});
      const response1=await responseData.json();
      const responseStatus:boolean=await responseData.ok();
      const responseStatusCode=await responseData.status();
  
  
      
  
      console.log('the response after doing  post request is:',response1);
      console.log('the status of the request is:',responseStatus);
      console.log('the status code is:',responseStatusCode);
  
  
      const bookingId=await response1.bookingid;
      const firstName1=await response1.booking.firstname;
      const lastname1=await response1.booking.lastname;
      const totalprice1=await response1.booking.totalprice;
      const depositpaid1=await response1.booking.depositpaid;
      const checkin1=await response1.booking.bookingdates.checkin;
      const checkout1=await response1.booking.bookingdates.checkout;
      const additionalneeds1=await response1.booking.additionalneeds;
  
  
  
  
      await expect(responseStatus).toBeTruthy();
      await expect(responseStatusCode).toBe(200);
  
  
      //validate the property name//==> validate response body
      await expect(response1).toHaveProperty("bookingid");
      await expect(response1).toHaveProperty("booking");
      await expect(response1).toHaveProperty("booking.additionalneeds");
  
  
  
      //validate the intrenal structure//validating the nested data
      const bookingObject=await response1.booking;
      const bookingDates=await response1.booking.bookingdates;
      await expect(bookingObject).toMatchObject({
      firstname: firstName1,
      lastname: lastname1,
      totalprice: totalprice1,
      depositpaid: depositpaid1,
      bookingdates: { checkin: checkin1, checkout: checkout1 },
      additionalneeds: additionalneeds1
    })
  
    await expect(checkin1).toBe('2026-03-03')
    await expect(checkout1).toBe('2026-04-04');
  
    await expect(bookingDates).toMatchObject({ checkin: checkin1, checkout: checkout1 });
    



})