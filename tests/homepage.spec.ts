import { test, expect } from '@playwright/test';

test.describe('Home page tests for dustinsison.com', () => {
    // Before each test case, open the browser to the homepage
    test.beforeEach(async ({ page }) => {
        await page.goto('http://dustinsison.com');
    });

    // Test Case 1: Verify that the home page loads as expected, by verifying the presence of critical components
    test('Verify page title and URL', async ({ page }) => {
        await expect(page.locator('h1')).toContainText('Welcome');
        await expect(page).toHaveURL('https://dustinsison.com/');
    });

    // Test Case 2: Verify that the home page video appears
    test('Verify home page video appears', async ({ page }) => {
        await expect(page.locator('iframe[id="wp-custom-header-video"]')).toBeVisible();
    });

    // Test Case 3: Verify home page links (Only the 'About me' link, since current projects can change)
    test('Verify home page links', async ({ page }) => {
        await expect(page.locator('a[href="/about-me"]')).toContainText('About Me');
    });
});
