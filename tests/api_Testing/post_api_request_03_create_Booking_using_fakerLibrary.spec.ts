/*
Test case:Create Booking
request Type: Post
Request Body: Random/Dynamic data
*/

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

const firstName_ = faker.person.firstName();
const lastName_ = faker.person.lastName();
const totalPrice_ = faker.number.int({ min: 1000, max: 5000 });
const depostPaid_ = faker.datatype.boolean();
const checkInDate_ = DateTime.now().toFormat('yyyy-MM-dd');
const checkOutDate_ = DateTime.now().plus({ day: 5 }).toFormat('yyyy-MM-dd');
const additionaNeeds_ = "BreakFast +Lunch +Dinner ";

test("Create Post request using faker Librray", async ({ request }) => {

  const data1 =
  {
    "firstname": firstName_,
    "lastname": lastName_,
    "totalprice": totalPrice_,
    "depositpaid": depostPaid_,
    "bookingdates": {
      "checkin": checkInDate_,
      "checkout": checkOutDate_
    },
    "additionalneeds": additionaNeeds_
  }

  const responseData = await request.post("/booking", { data: data1 });
  const response1 = await responseData.json();
  const responseStatus: boolean = await responseData.ok();
  const responseStatusCode = await responseData.status();




  console.log('the response after doing  post request is:', response1);
  console.log('the status of the request is:', responseStatus);
  console.log('the status code is:', responseStatusCode);


  const bookingId = await response1.bookingid;
  const firstName1 = await response1.booking.firstname;
  const lastname1 = await response1.booking.lastname;
  const totalprice1 = await response1.booking.totalprice;
  const depositpaid1 = await response1.booking.depositpaid;
  const checkin1 = await response1.booking.bookingdates.checkin;
  const checkout1 = await response1.booking.bookingdates.checkout;
  const additionalneeds1 = await response1.booking.additionalneeds;




  await expect(responseStatus).toBeTruthy();
  await expect(responseStatusCode).toBe(200);


  //validate the property name//==> validate response body
  await expect(response1).toHaveProperty("bookingid");
  await expect(response1).toHaveProperty("booking");
  await expect(response1).toHaveProperty("booking.additionalneeds");



  //validate the intrenal structure//validating the nested data
  const bookingObject = await response1.booking;
  const bookingDates = await response1.booking.bookingdates;
  await expect(bookingObject).toMatchObject({
    firstname: firstName1,
    lastname: lastname1,
    totalprice: totalprice1,
    depositpaid: depositpaid1,
    bookingdates: { checkin: checkin1, checkout: checkout1 },
    additionalneeds: additionalneeds1
  })

  //   await expect(checkin1).toBe('2026-02-17')
  //   await expect(checkout1).toBe('2026-02-22');

  await expect(bookingDates).toMatchObject({ checkin: checkin1, checkout: checkout1 });


})