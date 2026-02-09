/*
1.Playwright can be used to test your application for many types of accessibilty issues:
Examples:
-Missing or improper ALT Text for Images
-Poor Color Contrast
-Missing Form Labels
-Keyboard Navigation Issues



Every Website should follow WCAG Guidelines
-web content Accessibilty Guidelines (WCAG)

Install @axe-core/Playwright:
npm install @axe-core/playwwright

https://www.npmjs.com/package/@axe-core/playwright



*/

import {test,expect,Locator} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/*

    test.skip('Accessibilty Testing for all Violations',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout(2000);

//Scanning and detect all types of violations//

    const AccessibiltyResults=await new AxeBuilder({page}).analyze();
    //the result would be in json format



    // console.log(AccessibiltyResults);
    const numberOfViolations:number=AccessibiltyResults.violations.length;
    console.log('Number of Violations:',numberOfViolations);


    await expect(numberOfViolations).not.toBe(0);
})


test.skip('Accessibilty Testing for specific Violations',async({page},testInfo)=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout(2000);

//Scanning and detect all types of violations//

    const AccessibiltyResults=await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa','wcag2a1', 'wcag2aa1']).analyze();
    //the result would be in json format


    //adding the results into the file
    await testInfo.attach('Specific_Violations_WithTags',
        {
            body:JSON.stringify(AccessibiltyResults,null,2),
            contentType:'application/json'

    })




    console.log(AccessibiltyResults);
    const numberOfViolations:number=AccessibiltyResults.violations.length;
    console.log('Number of Violations:',numberOfViolations);


    await expect(numberOfViolations).not.toBe(0);
})


test.skip('Accessibilty Testing for specific Rules',async({page},testInfo)=>
{
    await page.goto("https://demowebshop.tricentis.com/");

    await page.waitForTimeout(2000);

//Scanning accessibilty violations with few Rules//

    const AccessibiltyResults=await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();
    //the result would be in json format


    //storing the results in file
    await testInfo.attach('Specific_Violations_with Rules',
        {
            body:JSON.stringify(AccessibiltyResults,null,2),
            contentType:'application/json'
        })



    console.log(AccessibiltyResults);
    const numberOfViolations:number=AccessibiltyResults.violations.length;
    console.log('Number of Violations:',numberOfViolations);


    await expect(numberOfViolations).not.toBe(0);
})



*/








    test('Accessibilty Testing for all Violations',async({page})=>
{
    await page.goto("https://www.w3.org");

    await page.waitForTimeout(2000);

//Scanning and detect all types of violations//

    const AccessibiltyResults=await new AxeBuilder({page}).analyze();
    //the result would be in json format



    // console.log(AccessibiltyResults);
    const numberOfViolations:number=AccessibiltyResults.violations.length;
    console.log('Number of Violations:',numberOfViolations);


    await expect(numberOfViolations).toBe(0);
})


test('Accessibilty Testing for specific Violations',async({page},testInfo)=>
{
    await page.goto("https://www.w3.org");

    await page.waitForTimeout(2000);

//Scanning and detect all types of violations//

    const AccessibiltyResults=await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa','wcag2a1', 'wcag2aa1']).analyze();
    //the result would be in json format


    //adding the results into the file
    await testInfo.attach('Specific_Violations_WithTags',
        {
            body:JSON.stringify(AccessibiltyResults,null,2),
            contentType:'application/json'

    })




    console.log(AccessibiltyResults);
    const numberOfViolations:number=AccessibiltyResults.violations.length;
    console.log('Number of Violations:',numberOfViolations);


    await expect(numberOfViolations).toBe(0);
})


test('Accessibilty Testing for specific Rules',async({page},testInfo)=>
{
    await page.goto("https://www.w3.org");
    

    await page.waitForTimeout(2000);

//Scanning accessibilty violations with few Rules//

    const AccessibiltyResults=await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();
    //the result would be in json format


    //storing the results in file
    await testInfo.attach('Specific_Violations_with Rules',
        {
            body:JSON.stringify(AccessibiltyResults,null,2),
            contentType:'application/json'
        })



    console.log(AccessibiltyResults);
    const numberOfViolations:number=AccessibiltyResults.violations.length;
    console.log('Number of Violations:',numberOfViolations);


    await expect(numberOfViolations).toBe(0);
})



