
import{test,expect,Locator} from '@playwright/test';

test("Read all table data from all table Pages",async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    await page.waitForTimeout(2000);

    let morePages=true;
    let total=0;
    // let count=0;

    while(morePages)
    {
        const rowsLocator:Locator=await page.locator("table#example tbody tr");
        const rowsLocator_Array:Locator[]=await rowsLocator.all();
        const count=await rowsLocator_Array.length;
        total=total+count;



        for(let row of rowsLocator_Array)
        {
            
            const data=await row.innerText();
            console.log(data)
            
        }

            const nextButton_Locator:Locator=await page.locator("button[aria-label='Next']");
            const disabledTag:string|null=await nextButton_Locator.getAttribute('class');

            if(disabledTag?.includes('disabled'))
            {
                morePages=false;
            }

            else
            {
                console.log(" ")
                console.log(" ")
                await page.waitForTimeout(2000);
                await nextButton_Locator.click();
            }


    
    

    }

    console.log('the total numebr of rows in the table are:',total);




    await page.waitForTimeout(3000);
})


test("Testing the filtering of data according to the drop-down",async({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    await page.waitForTimeout(3000);

    const dropDown_Locator:Locator=await page.locator("select#dt-length-0");
    await dropDown_Locator.selectOption({label:'50'});

    const allRows:Locator=await page.locator("table#example tbody tr");
    const allRows_array:Locator[]=await allRows.all();
    const numberOfRows:number=allRows_array.length;

    await expect(allRows).toHaveCount(50);
    await expect(numberOfRows).toBe(50);

    console.log('The numebr of rows present on the page are:',numberOfRows)



})

test.only("Searching for a data in the Table",async({page})=>
{
    let matchedFound=false;
    const name="Vivian Harrell";
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const searchBox:Locator=await page.locator("input#dt-search-0");
    await searchBox.fill(name);

    const allRows:Locator=await page.locator("table#example tbody tr");
    const allRows_array:Locator[]=await allRows.all();
    const numberOfRows:number=allRows_array.length;

    if(numberOfRows>=1)
    {
        for(let row of allRows_array)
        {
            const data=await row.innerText();

            if(data.includes(name))
            {
                matchedFound=true;
                console.log("record exists")
                console.log(data);
                break;
            }
            

        }
    }
    else
    {
        console.log("No data found!!!")
    }

    await expect(matchedFound).toBeTruthy();

    await page.waitForTimeout(3000);
})