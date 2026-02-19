/*

1. Create a new Booking
2. Fetch the BookingId
3. get the Booking Details by the get request
4. Create a Auth Token by the Post request
5. Update the Booking by the Put request
6. Delete the Booking

*/

import {test,expect} from '@playwright/test';
import fs from 'fs';
import { request } from 'http';
import { json } from 'stream/consumers';

//utility function to read data from the json file//
function read_Json_File(filepath_:string)
{
    const data_=JSON.parse(fs.readFileSync(filepath_,'utf-8'));
    return data_;
}


test('Delete a Booking (end to end) Creation',async({request})=>
{

    //Create a new data Using post request
const Post_Json_Data=read_Json_File("TestData_Folder/post_request_body.json");
const Post_Data=await request.post('/booking',{data:Post_Json_Data});
const Post_Response=await Post_Data.json();

console.log('The newly created data is:',Post_Response);
const bookingId=await Post_Response.bookingid;
console.log('The Booking id is:',bookingId);

await expect(Post_Data.ok()).toBeTruthy();
await expect(Post_Data.status()).toBe(200);

console.log("")
console.log("")

//Fetch the newly created data by using get request//
const getData=await request.get(`/booking/${bookingId}`);
const getResponse=await getData.json();

console.log('the data fetched according to the bookingId is:',getResponse);
await expect(getData.ok()).toBeTruthy();
await expect(getData.status()).toBe(200);



//3.Create a Auth Token using the Post request//
const Token_Json_data=read_Json_File("TestData_Folder/Token_request_body.json");
const Token_Data=await request.post('/auth',{data:Token_Json_data});
const Token_Response=await Token_Data.json();
console.log('the response of the token is:',Token_Response);
const Token_Value=await Token_Response.token;
console.log('the created token is--->:',Token_Value);
await expect(Token_Data.ok()).toBeTruthy();
await expect(Token_Data.status()).toBe(200);



//4.Update the data using put request//

const put_Json_data=read_Json_File("TestData_Folder/put_request_body.json");
const Put_Data=await request.put(`/booking/${bookingId}`,
    {
        headers:{"Cookie":`token=${Token_Value}`},
        data:put_Json_data
    }
)

const Put_Response= await Put_Data.json();
console.log('the updated data is:',Put_Response);

console.log('The Data Updated Sucessfully !!!');
await expect(Put_Data.ok()).toBeTruthy();
await expect(Put_Data.status()).toBe(200);



//Delete the booking id//
const DeleteData=await request.delete(`/booking/${bookingId}`,
    {
        headers:{"Cookie":`token=${Token_Value}`}
    }
)


const DeleteResponse=await DeleteData.statusText();
console.log('the response after deletion is:',DeleteResponse);

const statusCode=await DeleteData.status();
const status_=await DeleteData.ok();

console.log('The status code is==>:',statusCode);
console.log('the Status is:',status_);

await expect(DeleteData.ok()).toBeTruthy();
await expect(DeleteData.status()).toBe(201);


console.log('The booking Deleted sucessfully !!!',bookingId)



})

