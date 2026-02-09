//Grouping Tests//

import{test,expect} from '@playwright/test';

test.describe('Group 1',async()=>
{
    test('Test 1',async({page})=>
{
    console.log('Test One...')
})

test('Test 2',async({page})=>
{

    console.log('Test Two...')
})

})




test.describe('Group 2',async()=>
{
    
test('Test 3',async({page})=>
{
    console.log('Test Three...')
})

test('Test 4',async({page})=>
{
    console.log('Test four...')
})
    
})


