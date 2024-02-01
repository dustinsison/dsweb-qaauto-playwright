import { test, expect } from '@playwright/test';

test.describe('Footer element tests for dustinsison.com', () => {
    // Before each test case, open the browser to the homepage
    test.beforeEach(async ({ page }) => {
        await page.goto('http://dustinsison.com');
    });

    // Verify the footer and all footer links are present and visible
    test('Verify footer links are present and visible', async ({ page }) => {
        const footer = await page.locator('footer#colophon');
        await expect(footer).toBeVisible(); // Verify the presence of the footer

        // Verify the Twitter link
        const twitterLink = page.locator('a[href*="https://twitter.com/XMasterPrime"]');
        await expect(twitterLink).toBeVisible();

        // Verify the GitHub link
        const githubLink = page.locator('a[href*="https://github.com/dustinsison"]');
        await expect(githubLink).toBeVisible();

        // Verify the LinkedIn profile link
        const linkedinLink = page.locator('a[href*="https://www.linkedin.com/in/dustin-sison/"]');
        await expect(linkedinLink).toBeVisible();

        // Verify the email link
        const emailLink = page.locator('a[href*="mailto:dsison34@gmail.com"]');
        await expect(emailLink).toBeVisible();
    });
});
