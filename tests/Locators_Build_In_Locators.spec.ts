/*
1.page.getByAltText()==> to locate an element, usually image,by its  text alternative
2.page.getByText()==>to locate  by text content
3.page.getByRole()==>to locate by explicit and impilcit accessibility attribute.
4.page.getByPlaceholder()==>to locate an input by placeholder.
5.page.getByTitle()==>to locate an element by its title attribute
6.page.getByLabel()==>to locate a form control by associated labels text.
7.page.getByTestId()==> to locate an element based on its data-testId attribute(other attributes can be configured)

DOM==> document Object Model

Locator==>locator identifies the element on the page
Dom is an api interface provided by browser


*/

import {test,expect,Locator} from '@playwright/test';

test('Verify the presence of Locators',async({page})=>
{
    await page.goto("file:///C:/Users/Supriya/AppData/Local/Temp/dedb0141-10f4-4db8-8911-c61f619e0ffa_ClassDemos.zip.ffa/ClassDemos/app.html");

    //1.page.getByAltText()==> identifies images (and similar elements) based on the alt attributes.
    //use this locator when your element supports alt text such as image and area elements.

    const image_Element:Locator=await page.getByAltText("logo image");
    await expect(image_Element).toBeVisible();

    //await is generally used when(any statement) it is returning a promise or doing any action

    //2.getByText()==>to locate by textContent
    //find an element by the text it contains.you can match by a substring,exact string, locate by viisble text
    //use  this locator to find non interactive elements like div, span, p, etc..
    //for interactive elements like button, a, input etc...we use role locators.

    const text_=await page.getByText("Special: Unique text identifier");
    await expect(text_).toBeVisible();
    await expect(text_).toHaveText("Special: Unique text identifier");//Exact String
 
    await expect(page.getByText("Special: Unique")).toBeVisible();
    await expect(text_).toHaveText(/Special:\s+UNIQUE\s+text\s+identiFIER/i);

    console.log("Text Matched ....");




    //3.page.getByRole()==>to locate by explicit and implicit accessibility attributes
    //locating by role (role is not an attribute)
    //Role locators include buttons,checkboxes, headings,links,lists,tables and many more and follow w3c specifications for ARIA role.
    //Prefer for interactive elements like buttons, checkboxes,links,lists,headings,tables..etc

    await page.goto("https://demoblaze.com/");
    const SignUp_link:Locator=await page.getByRole("link",{name:'Sign up'});
    await SignUp_link.click();

    await page.waitForTimeout(3000);
    const heading_signUp:Locator=await page.getByRole("heading",{name:'Sign up'});
    await expect(heading_signUp).toHaveText('Sign up');
    console.log("the user is on Sign Up page...");


    //4.getByLabel()-->locate form control by labels text
    // when to use :Ideal for form fields with visible labels.

    const userName_:Locator=await page.getByLabel("Username:");
    await userName_.fill("Supriya");

    const password_:Locator=await page.getByLabel("Password:");
    await password_.fill("Secret@12345");
    
    await page.waitForTimeout(3000);


    //5. getByPlaceholder()-->to locate an input by placeholder attribute
    //finds an element with a given placeholder text,
    //Best for inputs without label but having a placeholder
    await page.goto("file:///C:/Users/Supriya/AppData/Local/Temp/dedb0141-10f4-4db8-8911-c61f619e0ffa_ClassDemos.zip.ffa/ClassDemos/app.html#");

    const fullName:Locator=await page.getByPlaceholder("Enter your full name");
    await fullName.fill("Saurabh Kumar");

    const phoneNumber:Locator=await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)");
    await phoneNumber.fill('1234567891');

    await page.waitForTimeout(3000);


    //6.page.getByTitle==> to locate an element by title attribute
    //when to use: when your element has a meaningfull title attribute
    const home_:Locator=await page.getByTitle("Home page link");
    await expect(home_).toHaveText("Home");

    const HTML_:Locator=await page.getByTitle("HyperText Markup Language");
    await expect(HTML_).toHaveText("HTML");

    console.log("Title matched...")



    //7.getByTestId==>Locate an element on its data-testid attribute(other attribute can be configured)
    //when to use: when text or role based locators are unstable or not suitable

    const Name1:Locator=await page.getByTestId("profile-name");
    const Name2:string="John Doe";
    const Email:Locator=await page.getByTestId("profile-email");
    const email2:string="john.doe@example.com";

    await expect(Name1).toHaveText(Name2);
    await expect(Email).toHaveText(email2);

    


})