import {test,expect,Locator} from '@playwright/test';


test.only('AutoWaiting and Forcing',async({page})=>
{
    // test.setTimeout(70000);// 70 seconds  ==> this time out is local and applicable only for this test
    test.slow() //it will triple the timeout (90000miliseconds /90 seconds) as default timeout is 30 seconds
    await page.goto('https://demowebshop.tricentis.com/');


//Assertions ===> default timeout value is 5seconds (Auto wait works)
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/',{timeout:8000});
    await expect(page.locator('.topic-html-content-header')).toBeVisible({timeout:10000});


//Action Methods===> default timeout value is 30 seconds (Auto wait works)
    await page.locator("#small-searchterms").fill('laptop');
    await page.locator("input[value='Search']").click();



    await page.waitForTimeout(3000);
})



test(' Force Actions',async({page})=>
{
    await page.goto('https://demowebshop.tricentis.com/');


//Assertions ===> default timeout value is 5seconds (Auto wait works)
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    await expect(page.locator('.topic-html-content-header')).toBeVisible();


//Action Methods===> default timeout value is 30 seconds (Auto wait works)
    await page.locator("#small-searchterms").fill('laptop',{force:true});
    await page.locator("input[value='Search']").click({force:true});

    //force action ==> it wont perform the actionability checks it will directly perform the actions//



    await page.waitForTimeout(3000);
})