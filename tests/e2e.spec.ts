import { test, expect } from '@playwright/test'

test('should navigate to the profile page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Profile');
  await expect(page).toHaveURL('http://localhost:3000/profile');
  await expect(page.locator('h1')).toContainText('Access Denied');
});

test.describe('posts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/posts');
  });
  
  test('posts page should load', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Posts');
  });

  test('should navigate to the first post', async ({ page }) => {
    await page.getByAltText('post-link').first().click();
    await page.waitForURL('**/posts/*');

    expect(page.url()).toContain('/posts/');
  });
});
