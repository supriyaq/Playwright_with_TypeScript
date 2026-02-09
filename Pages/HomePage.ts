import { Page, Locator } from '@playwright/test';

export class HomePage {

    private readonly page;
    private readonly allProducts: Locator;
    private readonly addToCart_Button: Locator;


    constructor(page_: Page) {
        this.page = page_;
        this.allProducts = this.page.locator('div#tbodyid h4 a');
        this.addToCart_Button = this.page.locator('.btn.btn-success.btn-lg');
    }



    //action methods//
    async addProductTocart(productName1: string):Promise<void>
     {
        const allProducts_: Locator[] = await this.allProducts.all();
        for (let product of allProducts_) {
            const productName: string = await product.innerText();
            if (productName === productName1) {
                await product.click();
                break;
            }
        }



        this.page.once('dialog', async (dialog) =>
             {
            const type = await dialog.type();
            const message = await dialog.message();

            console.log('the type of dialog is:', type);
            console.log('the message on the dialog is:', message);

            await dialog.accept();

        })



        await this.addToCart_Button.click();


    }



}