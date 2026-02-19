/*
Pre-requisite
  -data:json file
  -create Token


  1.Create a booking (Post)---> bookingId
  2.Update Booking(Put)----> required Token
     

*/

import{test,expect} from '@playwright/test';
import fs from 'fs';


//utility function returns json file data//
function readJsonFile(filepath_:string)
{
    const data=JSON.parse(fs.readFileSync(filepath_,'utf-8'));
    return data;
}


test('Update the Booking using Patch request',async({request})=>
{
    //1.Create a booking(POST)-->bookingId
    const Post_Json_Data=readJsonFile("TestData_Folder/post_request_body.json");
    const Post_Data=await request.post("/booking",{data:Post_Json_Data});
    const Post_Response=await Post_Data.json();

    console.log('the newly created data is:',Post_Response);

    const bookingId=await Post_Response.bookingid;
    console.log('the booking id of newly created data is:',bookingId);

    await expect(Post_Data.ok()).toBeTruthy();
    await expect(Post_Data.status()).toBe(200);


    console.log('the new booking was created sucessfully !!!');



    //Create a Auth Token//
    const Token_Json_Data=readJsonFile("TestData_Folder/Token_request_body.json");
    const Token_Data=await request.post("/auth",{data:Token_Json_Data});
    const Token_Response=await Token_Data.json();

    console.log('The data of the Token is:',Token_Response);
    const Token_Value=Token_Response.token;

    console.log('the newly created token is:',Token_Value);


    await expect(Token_Data.ok()).toBeTruthy();
    await expect(Token_Data.status()).toBe(200);




    //Create a Patch request//
    const Patch_Json_Data=readJsonFile('TestData_Folder/patch_request_body.json');
    const Patch_Data=await request.patch(`/booking/${bookingId}`,
        {
            headers:{"Cookie":`token=${Token_Value}`},
            data:Patch_Json_Data
        }
    )

    const Patch_Response=await Patch_Data.json();
    console.log('The updated data by hitting the patch request is:',Patch_Response);


    await expect(Patch_Data.ok()).toBeTruthy();
    await expect(Patch_Data.status()).toBe(200);

    console.log('the Data Updated Sucessfully!!!')




})