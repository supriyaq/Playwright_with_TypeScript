import {test,expect,Locator} from '@playwright/test';

import { LoginPage as login } from '../Pages/LoginPage';
import { HomePage as home } from '../Pages/HomePage';
import { CartPage as cart } from '../Pages/CartPage';


test('Verify the adding of product to the cart',async({page})=>
{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);

    const login1= new login(page);
    const home1=new home(page);
    const cart1=new cart(page);

    await login1.LoginAction('supriyakumari','test@123');

    await home1.addProductTocart('Sony xperia z5');

    await cart1.openCartPage();
    await page.waitForTimeout(5000);
   const status= await cart1.verifyProductPresent('Sony xperia z5');

   await expect(status).toBeTruthy();

})