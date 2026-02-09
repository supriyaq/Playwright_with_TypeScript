//Frames.spec.ts//

/*
An i frame (short for inline frame) is an html element that allows you to embed another html document within the current documenet.

Iframes are commonly used to embedd external content such as videos, maps or another web pages(as seen here) into a web page within the parent documenet

*/
import {test,expect,Locator} from '@playwright/test';

test('Frames Demo',async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //count how many frames are there on page//
    const totalNumberOfFrames=await page.frames();
    const count:number=await totalNumberOfFrames.length;
    console.log("The number of frames on the pafe are:",count);

    
    //capture first Frame//
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    
    if(frame1)
    {
        const inputBox1:Locator=await frame1.locator("input[name='mytext1']");
        await inputBox1.fill("Hello this is frame 1...");
    }



    const frame2=await page.frameLocator('frame[src="frame_2.html"]');

    if(frame2)
    {
        const inputBox2:Locator=await frame2.locator("input[name='mytext2']");
        await inputBox2.fill('Hello this is frame2...');
    }
    else
    {
        console.log("Frame2 doesnot exits..")
    }






    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    if(frame3)
    {
        const inputBox3=await frame3.locator("input[name='mytext3']");
        await inputBox3.fill("input box INSIDE frame3");


        const childFrames=await frame3.childFrames();
        const count_:number=await childFrames.length;
        console.log("the number of child frames are: ",count_);

        const innerFrame=await childFrames[0];
        const radioButton:Locator=await innerFrame.getByLabel('Form Autofilling');
        await radioButton.click();
    }
    else
    {
        console.log(" !!! Sorry cant find frame3 !!! ")
    }


    await page.waitForTimeout(3000);


})
