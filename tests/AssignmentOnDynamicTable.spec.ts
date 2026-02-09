import{test,expect,Locator} from '@playwright/test';

test('Dynamic Table',async({page})=>
{

    const ChromeProcess:string='Chrome';
    const FireFoxprocess:string='Firefox';
    let cpu:string=' ';
    let memory:string=' ';
    let network:string=' ';
    let disk:string=' ';

    await page.goto("https://testautomationpractice.blogspot.com/");

    const Table_Locator:Locator=await page.locator("table#taskTable");
    await expect(Table_Locator).toBeVisible();


    const Rows_Locator:Locator=await page.locator("table#taskTable tbody tr");
    const rows_Array:Locator[]=await Rows_Locator.all();


    for(let row of rows_Array)
    {
        const currentRow:Locator=await row.locator("td");
        const currentRow_Array:Locator[]=await currentRow.all();
        const processName:string=await currentRow_Array[0].innerText();

        if(processName===ChromeProcess)
        {
            for(let data1 of currentRow_Array)
            {
                const ans=await data1.innerText();
                if(ans.includes('%'))
                {
                    cpu=ans;
                    console.log(`CPU load of ${processName} process is ${ans}`);

                }
                else
                {
                    if(ans.includes('Mbps'))
                    {
                        network=ans;
                        console.log(`Network speed of ${processName} process: ${ans}`);
                    }
                }

            }

        }

        else
        {
            if(processName===FireFoxprocess)
            {
                for(let data1 of currentRow_Array)
            {
                const ans=await data1.innerText();
                if(ans.includes('MB'))
                {
                    memory=ans;
                    console.log(`Memory Size of ${processName} process is ${ans}`);

                }
                else
                {
                    if(ans.includes('MB/s'))
                    {
                        disk=ans;
                        console.log(`Disk space of ${processName} process: ${ans}`);
                    }
                }

            }

            }
        }
    }







    await page.waitForTimeout(3000);

})