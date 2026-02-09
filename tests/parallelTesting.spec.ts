import{test,expect} from '@playwright/test';

// test.describe.configure({mode:'serial'});
// test.describe.configure({mode:'parallel'});


test.describe('Group One',async()=>
{
    test('Test 1',async()=>
    {
        console.log('This is Test 1');
    })


    test('Test 2',async()=>
    {
        console.log('This is Test 2');
    })


    test('Test 3',async()=>
    {
        console.log('This is Test 3');
    })


    test('Test 4',async()=>
    {
        console.log('This is Test 4');
    })

    test('Test 5',async()=>
    {
        console.log('This is Test 5');
    })


})