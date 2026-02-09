import{test,expect,Locator} from '@playwright/test';

test('Count the number of books present on the page',async({page})=>
{
    test.slow();
    await page.goto("https://www.booksbykilo.in/new-books");

    let booksTitle=[];
    let previousvalue=0;
    let count=0;
    let bookCount=0;
    while(true)
    {
        
        const books_Locator=await page.locator("div#productsDiv h3");
        const books_Title:string[]=await books_Locator.allInnerTexts();
        
        for(let book of books_Title)
        {
            // console.log(book);
            booksTitle.push(book);
            count++;
        }

        

        await page.evaluate(()=>
        {
            window.scrollTo(0,document.body.scrollHeight);
        })
        await page.waitForTimeout(3000);

        let currentValue=await page.evaluate(()=>
        {
            return document.body.scrollHeight;
        })


        if(currentValue===previousvalue)
        {
            break;
        }

        previousvalue=currentValue;

    }


    console.log("The total number of books present on the page are:",count);
    console.log('the length of array:',booksTitle.length);

    const mySet=new Set(booksTitle);
    console.log('The ORIGINAL COUNT OF BOOKS IS :',mySet.size);


    await page.waitForTimeout(3000);
})