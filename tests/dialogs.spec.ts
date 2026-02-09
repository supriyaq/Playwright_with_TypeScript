//
/*
there are three different types of dialogs alerts(),confirm(), prompt() dilaogs/alerts.

1. by default, dialofs are auto-dismissed by playwright, so you dont have to handle them.\//2. Howevere, you can register a dialog handler before the actions that triggers the dialog to either sialog.accept or dialog.dismiss it.

*/
import {test,expect ,Locator} from '@playwright/test';

console.log('This is a simple alert dialog....');
console.log(" ");
test('Simple Alert',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable event Handling//
    page.on('dialog',async(dialog)=>
    {
        const dialog_Type=await dialog.type();
        const dialog_Message=await dialog.message();

        console.log('The type of dialog is: ',dialog_Type);
        console.log('The message on dialog Box is: ',dialog_Message);

        await expect(dialog_Type).toBe('alert');
        await expect(dialog_Message).toBe('I am an alert box!');

        await dialog.accept();


    })

    const alertButton:Locator=await page.locator("button#alertBtn");
    await alertButton.click();// alert is automatically dismissed by the playwright//



    await page.waitForTimeout(3000);
})


//Confirmation Dialog
console.log(" ");
console.log(" ");
console.log('This is a confirmation dialog')
console.log(" ");
test('Confirmation Dialog',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable event Handling//
    page.on('dialog',async(dialog)=>
    {
        const dialog_Type=await dialog.type();
        const dialog_Message=await dialog.message();

        console.log('The type of dialog is: ',dialog_Type);
        console.log('The message on dialog Box is: ',dialog_Message);

        await expect(dialog_Type).toBe('confirm');
        await expect(dialog_Message).toBe('Press a button!');

        // await dialog.accept();
        await dialog.dismiss();


    })

    const alertButton:Locator=await page.locator("button#confirmBtn");
    await alertButton.click();// alert is automatically dismissed by the playwright//

    const text_Locator:Locator=await page.locator("p#demo");
    const text:string=await text_Locator.innerText();
    console.log('The text after handling the confirmation dialog: ',text);

    // await expect(text).toBe('You pressed OK!');
    await expect(text).toBe('You pressed Cancel!');



    await page.waitForTimeout(3000);
})

console.log(" ");
console.log('This is a prompt dialog !!! ');
console.log(" ");

test('Prompt Dialog',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
const name_:string='Jatin Goyal';
    //Enable event Handling//
    page.on('dialog',async(dialog)=>
    {
        
        const dialog_Type=await dialog.type();
        const dialog_Message=await dialog.message();
          const default_Value:string=await dialog.defaultValue();

        console.log('The type of dialog is: ',dialog_Type);
        console.log('The message on dialog Box is: ',dialog_Message);
        console.log('the defualt value in the input box is:',default_Value);
       
       

        await expect(dialog_Type).toBe('prompt');
        await expect(dialog_Message).toBe('Please enter your name:');
        await expect(default_Value).toBe('Harry Potter');


        // await dialog.accept(name_);
        await dialog.dismiss();


    })

    const alertButton:Locator=await page.locator("button#promptBtn");
    await alertButton.click();// alert is automatically dismissed by the playwright//

    const text_Locator:Locator=await page.locator("p#demo");
    const text:string=await text_Locator.innerText();
    console.log('The text after handling the confirmation dialog: ',text);

    // await expect(text).toBe(`Hello ${name_}! How are you today?`);
    await expect(text).toBe('User cancelled the prompt.');



    await page.waitForTimeout(3000);
})