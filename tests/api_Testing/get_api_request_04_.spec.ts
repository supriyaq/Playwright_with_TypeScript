import { test, expect } from '@playwright/test';
import { request } from 'http';



//sending the get request along with path parameters

test('Get Booking Details By Id', async ({ request }) => {
    const bookingId = 1;

    const getData = await request.get(`/booking/${bookingId}`);
    const getResponse = await getData.json();

    console.log('the data fetched after performing the get request is:', getResponse);

    await expect(getData.ok()).toBeTruthy();
    await expect(getData.status()).toBe(200);

    console.log('the data fetched sucessfully !!! ')



})


test.only('Get Booking Details by Query Parameters', async ({ request }) => {
    const firstname = "Supriya";
    const lastname = "Saraswat";

    const getData = await request.get('/booking', { params: { firstname, lastname } });
    const getResponse = await getData.json();

    console.log('The value of the response is:', getResponse);

    await expect(getData.status()).toBe(200);
    await expect(getData.ok()).toBeTruthy();

    const length1 = await getResponse.length;
    console.log('the length of an array is :', length1);


    //check response should not be empty//
    await expect(getResponse.length).toBeGreaterThan(0);

    for (let booking of getResponse) {
        const ans = booking.bookingid;

        /*
        1.The booking id attribute should be present
        2. The booking id attribute should be a number
        3. The value of booking id should be greater than 0.
*/

const type_ans=typeof(ans);


await expect(booking).toHaveProperty("bookingid");
await expect(type_ans).toBe("number");
await expect(ans).toBeGreaterThan(0);




    }



})


