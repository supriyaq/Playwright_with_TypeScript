import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Welcome pavanol' }).click();
  await page.getByRole('link', { name: 'Sony xperia z5' }).click();
  await expect(page.locator('h2')).toMatchAriaSnapshot(`- heading "Sony xperia z5" [level=2]`);
  await page.getByRole('link', { name: 'Log out' }).click();
});