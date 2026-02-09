import{test,expect,Locator} from '@playwright/test';

test("Verify Chrome CPU load in dynamic Table",async({page})=>
{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    await page.waitForTimeout(2000);


    const Table_Locator:Locator=await page.locator("table.table tbody");
    await expect(Table_Locator).toBeVisible();
    console.log("The table is visible....");

    const Rows_Locator:Locator=await page.locator("table.table tbody tr");
    const Rows_Array:Locator[]=await Rows_Locator.all();
    const numberOfRows:number=Rows_Array.length;
    await expect(numberOfRows).toBe(4);
    await expect(Rows_Locator).toHaveCount(4);

    console.log("the number of rows in the table are:",numberOfRows)
    let cpuLoadpercentage:string=' ';
    for(let row of Rows_Array)
    {
      const  name:string="Chrome";

      const currentRow:Locator=await row.locator('td');
      const currentRowCells:Locator[]=await currentRow.all();
      const processName:string=await currentRowCells[0].innerText();
      console.log(processName);

      if(processName===name)
      {
        for(let data1 of currentRowCells)
        {
            const ans1:string=await data1.innerText();
            if(ans1.includes('%'))
            {
                 cpuLoadpercentage=ans1;
                 break;
            }
        }
      }

      


    }

    console.log('the cpu load percenatge is:',cpuLoadpercentage)


    const yellowBox_Locator:Locator=await page.locator("p#chrome-cpu");
    const yellowBox_text:string=await yellowBox_Locator.innerText();
    console.log("the data present in the yellow box is :",yellowBox_text);

    let status=false;

    if(yellowBox_text.includes(cpuLoadpercentage))
    {
        status=true;
        console.log("the value is matching")
    }
    else
    {
        console.log("the value is not matching")
    }

    await expect(status).toBeTruthy();
    await expect(yellowBox_text).toContain(cpuLoadpercentage);




    await page.waitForTimeout(3000);
})