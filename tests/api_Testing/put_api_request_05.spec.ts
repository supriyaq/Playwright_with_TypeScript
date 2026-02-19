/*
1. Create a new Booking--->Post Request 
2. Fetch the booking Id---> capture the booking Id from the post request
3. Create a Auth Token ---> Create a Auth Token using POST request
4. Update the Created Booking.---> Create a PUT request
*/

import {test,expect} from '@playwright/test';
import fs from 'fs';


//utility function for reading the JSON file//
function read_JSON_File(filepath_:string)
{
    const data=JSON.parse(fs.readFileSync(filepath_,'utf-8'));
    return data;
}

//utility function returns json file data//
test('Update the details of Booking',async({request})=>
{

    //1.Create a Booking====> bookingId//

    const Post_Json_Data=read_JSON_File("TestData_Folder/post_request_body.json");
    const Post_data=await request.post('/booking',{data:Post_Json_Data});
    const Post_response=await Post_data.json();

    console.log('The newly created data is:',Post_response);

    const bookingId=await Post_response.bookingid;
    console.log('The booking Id is:',bookingId);


    //2. Create the Token//
    const Token_Json_Data=read_JSON_File("TestData_Folder/Token_request_body.json");
    const Token_Data=await request.post("/auth",{data:Token_Json_Data});
    const Token_response=await Token_Data.json();


    console.log('The Data of the created Token is:',Token_response);

    await expect(Token_Data.ok()).toBeTruthy();
    await expect(Token_Data.status()).toBe(200);


    const Token_Value=Token_response.token;
    console.log('The value of token is:',Token_Value);





    //sending update (Put)//
    const Put_Data_Json=read_JSON_File("TestData_Folder/put_request_body.json");
    const Put_Data=await request.put(`/booking/${bookingId}`,
        {
            headers:{"Cookie":`token=${Token_Value}`},
            data:Put_Data_Json
        }
    )


    const Put_Response=await Put_Data.json();
    console.log('the Updated data is:',Put_Response);


})


