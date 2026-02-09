//Comparing Methods//

import{test,expect,Locator} from '@playwright/test';

test('Comparing Methods',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    const productLocators:Locator=await page.locator("h2[class='product-title'] a");//6 elements
    const countOfProducts:number=await productLocators.count();


    //1. innerText() vs TextContent()
    /* 
    const thirdProduct:string=await productLocators.nth(2).innerText();
    console.log('the name of third product is:',thirdProduct);

    const fourthProduct:string|null=await productLocators.nth(3).textContent();
    console.log('the name of the fourth product is:',fourthProduct);
 */

    //Traditional For Loop// by using text content
    // console.log('using for loop and using Text Content method !!!')
    // for(let i=0;i<countOfProducts;i++)
    // {
    //     const data:string|null=await productLocators.nth(i).textContent();
    //     const ans=data?.trim();
    //     console.log(ans);
    // }

    // //By using innerText()
    // console.log('using for loop and using inner text !!!')
    // for(let i=0;i<countOfProducts;i++)
    // {
    //     const data:string=await productLocators.nth(i).innerText();
    //     console.log(data);
    // }


    //2. allInnnerText() vs allTextContent()
    //allInnerText()
    /* 
    const allProductsData1:string[]=await productLocators.allInnerTexts();
    console.log('all products data',allProductsData1);

    for(let product of allProductsData1)
    {
        console.log(product);
    } */


    /* //allTextContent Method
    const allProductsData2:string[]=await productLocators.allTextContents();
    console.log('by using all text content method:',allProductsData2);

    const allProductsArray:string[]=allProductsData2.map((text)=>
    {
        const ans=text.trim();
        return ans;
    })

    console.log('products array after trimmed:',allProductsArray)
 */


    const allProducts:Locator[]=await productLocators.all(); //array of locator
    // console.log(allProducts);

    /* console.log('the value of first product:',await allProducts[0].innerText())
    console.log('the value of first product:',await allProducts[1].textContent())
//for of loop
    console.log('using text Content method')
    for(let product of allProducts)
    {
        const data1:string|null=await product.textContent();
        const data2=data1?.trim()
        console.log(data2);
    }


    console.log('using innerText')
    for(let product of allProducts)
    {
        const data1:string=await product.innerText();
        console.log(data1);
    }
    
 */

    //for in loop//
    for(let index in allProducts)
    {
        const ans:string=await allProducts[index].innerText();
        console.log(ans)

    }

    console.log('using the for in loop')
     for(let index in allProducts)
    {
        const ans:string|null=await allProducts[index].textContent();
        console.log(ans)

    }

    await page.waitForTimeout(3000);
})