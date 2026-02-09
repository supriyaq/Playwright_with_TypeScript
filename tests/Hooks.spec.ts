//Hooks//
import{test,expect} from '@playwright/test';
import { beforeEach } from 'node:test';

/*


*/

test('Test 1',async({page})=>
{
    console.log('Test One...')
})

test('Test 2',async({page})=>
{

    console.log('Test Two...')
})

test('Test 3',async({page})=>
{
    console.log('Test Three...')
})

test('Test 4',async({page})=>
{
    console.log('Test four...')
})


test.beforeEach("Before Each",async()=>
{
    console.log(' !!! This is Before Each')
})

test.afterEach('After Each',async()=>
{
    console.log('This is After Each !!!')
})



test.beforeAll('Before All',async()=>
{
    console.log(' *** This is Before All')
})

test.afterAll('After All',async()=>
{
    console.log('This is After All ***')
})