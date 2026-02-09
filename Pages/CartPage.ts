import {Page,Locator} from '@playwright/test';


export class CartPage
{
    private readonly page:Page;
    private readonly cartLink:Locator;
    private allProducts:Locator;


    constructor(page_:Page)
    {
        this.page=page_;
        this.cartLink=this.page.locator("#cartur");
        this.allProducts=this.page.locator("tbody#tbodyid tr td:nth-child(2)");
    }


    async openCartPage():Promise<void>
    {
        await  this.cartLink.click();
        
    }


    async verifyProductPresent(targetProduct:string):Promise<boolean>
    {
        const allProducts_=await this.allProducts.all();
        for(let productName of allProducts_)
        {
            const ans=await productName.innerText();
            if(ans===targetProduct)
            {
                console.log(`the product : ${ans} is present`);
                return true;
            }
        }


        return false;

    }


}