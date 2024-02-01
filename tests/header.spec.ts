import { test, expect } from '@playwright/test';

test.describe('Header element tests for dustinsison.com', () => {
    // Before each test case, open the browser to the homepage
    test.beforeEach(async ({ page }) => {
        await page.goto('http://dustinsison.com');
    });

    // Verify the header and all header links are present and visible
    test('Verify header links are present and visible', async ({ page }) => {
        // Verify the presence of the header
        await expect(page.locator('[id=masthead]')).toBeVisible();

        // Verify the title links to the home page
        await expect(page.locator('a[href*="https://dustinsison.com"]').first()).toContainText('dustinsison.com');
        await expect(page.locator('a[href*="https://dustinsison.com"]').first()).toBeVisible();

        // Verify the About Me link is visible
        await expect(page.locator('a[href*="https://dustinsison.com/about-me"]')).toBeVisible();

        // Verify the Projects Log link is visible
        await expect(page.locator('a[href*="https://dustinsison.com/category/projects-log/"]')).toBeVisible();
    });
});
