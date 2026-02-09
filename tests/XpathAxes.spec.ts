import {test,expect,Locator} from '@playwright/test';

test(" Xpath Acess Demo ",async({page})=>
{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //1.self Node//
    console.log(" !!!! self Node !!!! ")
    const selfNode_Element=await page.locator("//td[text()='Germany']/self::td");
    const SelfNode_text=await selfNode_Element.textContent();

    await expect(selfNode_Element).toHaveText("Germany");
    await expect(SelfNode_text).toBe('Germany');
    console.log(`the text present in the locator is :`,SelfNode_text);


    //2.Parent Node//
    console.log("!!! parent Node !!!");
    const parentNode_Element:Locator=await page.locator("//td[text()='Germany']/parent::tr");
    const parentNode_Element_text:string|null=await parentNode_Element.textContent();
    console.log("the text present in the Parent Node:",parentNode_Element_text);

    await expect(parentNode_Element).toContainText("Alfreds Futterkiste");
    await expect(parentNode_Element).toHaveText("Alfreds Futterkiste  Maria Anders Germany");

    await expect(parentNode_Element_text).toContain("Germany");


    //3.Child Node//
    console.log(" !!! ... Child Elements ... !!!");
    const childNode:Locator=await page.locator("//table[@id='customers']//tr[2]/child::td");

    const childNode_count:number=await childNode.count();
    const childNode_textContent:string[]=await childNode.allTextContents();

    await expect(childNode_count).toBe(childNode_count);
    // await expect(childNode).toHaveText(childNode_textContent);

    for(let text of childNode_textContent)
    {
        console.log(text);
    }

console.log('the count of the child elements are :',childNode_count);


    //4.ancestors//
console.log(" ... Ancestor Elements ... ");
const anscestor_Element:Locator=await page.locator("//td[text()='Germany']/ancestor::table");


await expect(anscestor_Element).toHaveAttribute('id','customers');
console.log('the table element is located');


//5.descendants//
console.log("...descendants Elements ....");
const descendants_Element:Locator=await page.locator("//table[@id='customers']/descendant::td");

const descendants_Element_count:number=await descendants_Element.count();
const descendants_Element_textContent:string[]=await descendants_Element.allTextContents();


await expect(descendants_Element).toHaveCount(descendants_Element_count);


for(let text of descendants_Element_textContent)
{
    console.log(text)
}
console.log("the count of all td elements is :",descendants_Element_count);


//6.Following Elements==> Siblings and Children of Siblings//
const following_Element:Locator=await page.locator("//td[text()='Germany']/following::td[1]");

const following_Element_count:number=await following_Element.count();
const following_Element_text:string|null=await following_Element.textContent();

await expect(following_Element).toHaveCount(1);
await expect(following_Element).toContainText("Centro comercial Moctezuma");
await expect(following_Element_text).toContain("Centro comercial Moctezuma");

console.log("the text present in the following sibling is :",following_Element_text);

//7 following-Sibling
const following_sibling_Element:Locator=await page.locator("//td[text()='Alfreds Futterkiste']/following-sibling::td[1]");

const following_sibling_Element_count:number=await following_sibling_Element.count();
const following_sibling_Element_text:string|null=await following_sibling_Element.textContent();


await expect(following_sibling_Element).toHaveCount(1);
await expect(following_sibling_Element).toHaveText("Maria Anders");
await expect(following_sibling_Element_text).toBe("Maria Anders");

console.log("the text present in the following sibling eleemnt is:",following_sibling_Element_text);
console.log('the count of the following sibling elements is:',following_sibling_Element_count)

//8. preceeding Elements
const preceeding_Element:Locator=await page.locator("//td[text()='Germany']/preceding::td[1]");

const preceeding_Element_count=await preceeding_Element.count();
const preceeding_Element_text=await preceeding_Element.textContent();

await expect(preceeding_Element).toHaveCount(1);
await expect (preceeding_Element).toHaveText("Maria Anders");
await expect (preceeding_Element_text).toBe("Maria Anders");

console.log('the count of the preceding element just before the self node is:',preceeding_Element_count);

console.log('the text content of the preceding element is:',preceeding_Element_text);




//9.Preceeding Sibling Element
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ");
console.log('preceeding sibling elements..')
const preceeding_Sibling_Element:Locator=await page.locator("//td[text()='Germany']/preceding-sibling::td");

const preceeding_Sibling_Element_count:number=await preceeding_Sibling_Element.count();
const preceeding_Sibling_Element_text:string[]=await preceeding_Sibling_Element.allTextContents();


const firstElement_text:string|null=await preceeding_Sibling_Element.nth(0).textContent();
const secondElement_text:string|null=await preceeding_Sibling_Element.nth(1).textContent();

await expect(preceeding_Sibling_Element).toHaveCount(2);
// await expect(preceeding_Element_text).toContainText(firstElement_text);

for(let text of preceeding_Sibling_Element_text)
{
    console.log(text);
}


await expect(firstElement_text).toBe("Alfreds Futterkiste");
await expect(secondElement_text).toBe("Maria Anders")




    





})