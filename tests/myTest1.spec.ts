// const{test,expect}=require("@playwright/test");
import{test,expect} from '@playwright/test';

test("Verify Title",async({page})=>
{
    await page.goto("http://www.automationpractice.pl/index.php");
    const title_:string=await page.title();
    console.log('the title is :',title_);

    await expect(page).toHaveTitle(title_);

})

//fixture==>global variables ==> it means that it is accessible through out the project
//page , browser