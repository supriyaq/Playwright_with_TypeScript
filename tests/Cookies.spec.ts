//Cookies//

import{test,expect,Locator,chromium} from '@playwright/test';
test(' Cookies ',async()=>
{
    const browser=await chromium.launch();
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();

    browserContext.addCookies(
        [
            {name:'Mycookie One', value:'90001',url:'https://demowebshop.tricentis.com/'}
        ]
    );

    console.log('!!! Cookie Added !!!')



    await page.goto('https://demowebshop.tricentis.com/');
    await page.waitForTimeout(3000);

    const allCookies=await browserContext.cookies();
    const count_of_added_Cookies:number=await allCookies.length;
    console.log('the count of all the added cookies is :',count_of_added_Cookies);

    const addedCookie=allCookies.find((cookie_)=>
    {

        if(cookie_.name==='Mycookie One')
        {
            return cookie_;
        }
    })


    console.log('The details of the added cookie is:',addedCookie);
    await expect(count_of_added_Cookies).toBeGreaterThan(0);
    await expect(addedCookie?.value).toBe('90001');
    await expect(addedCookie).toBeDefined();

 console.log(" ");
 console.log(" ");
    console.log('printing the details of all added cookies');
    console.log(" ");
    console.log(" ");

    for(let cookie of allCookies)
    {
        // console.log(cookie);
        console.log(`the name of cookie is: ${cookie.name}  and the value of cookie is : ${cookie.value}`);
    }

    console.log('Deleting all the cookies ....');
    await browserContext.clearCookies();

    const cookies_deleted=await browserContext.cookies();
    const count_deleted=await cookies_deleted.length;

    console.log('the count of cookies after deleting:',count_deleted);

    await expect(count_deleted).toBe(0);



    await page.waitForTimeout(3000);

})