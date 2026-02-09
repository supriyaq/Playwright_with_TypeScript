import{test, expect,Locator} from '@playwright/test';

test('Infinite Scrolling',async({page})=>
{
    test.slow();
    await page.goto("https://www.booksbykilo.in/new-books");
    await page.waitForTimeout(3000);

    let previousHeight=0;
    while(true)
    {


         await page.waitForTimeout(2000);
       
        await page.evaluate(()=>
        {
           window.scrollTo(0,document.body.scrollHeight)
        });
        
        
        

        let currentHeight=await page.evaluate(()=>
        {
           return document.body.scrollHeight;
        });

        console.log("Previous Height:",previousHeight);
        console.log("Current Height:",currentHeight);
        console.log(" ")
        console.log(" ")

        if(currentHeight===previousHeight)
        {
            break;
        }


        previousHeight=currentHeight;
         

    }

    console.log("Reached the end of loop");

})

    test.only('Search a Particular Book',async({page})=>
{
    test.slow();
    await page.goto("https://www.booksbykilo.in/new-books");
    await page.waitForTimeout(3000);

    let bookFound=false;
    let previousHeight=0;
    while(true)
    {
        const booksTitle_Locator:Locator=await page.locator("div#productsDiv h3");
        const booksTitle:string[]=await booksTitle_Locator.allInnerTexts();

        for(let title of booksTitle)
        {
            if(title==='The Sugar Barons Daughter456234')
            {
                console.log("Book Found");
                bookFound=true;
                await expect(bookFound).toBeTruthy();
                
            }
        }

        if(bookFound)
        {
            break;
        }


         await page.waitForTimeout(2000);
       
        await page.evaluate(()=>
        {
           window.scrollTo(0,document.body.scrollHeight)
        });
        
        
        

        let currentHeight=await page.evaluate(()=>
        {
           return document.body.scrollHeight;
        });

        console.log("Previous Height:",previousHeight);
        console.log("Current Height:",currentHeight);
        console.log(" ")
        console.log(" ")

        if(currentHeight===previousHeight)
        {
            break;
        }


        previousHeight=currentHeight;
         

    }

    console.log("Reached the end of loop");

    if(!bookFound)
    {
        console.log("Book Is not found!!!")
    }
   




    await page.waitForTimeout(3000);
})