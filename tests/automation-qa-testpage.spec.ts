const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('https://dustinsison.com/automated-qa-test-page/');
});

test.describe('Automation QA Test Page Tests', () => {
    // Test Case 1: Enter text into the input element, verify text is present afterwards
    test('Enter text into the text input field', async ({ page }) => {
        await page.fill('input[id*=input_field]', 'test');
        const value = await page.inputValue('input[id*=input_field]');
        expect(value).toBe('test');
    });

    // Test Case 2: Highlight a single element from the single-selection field
    test('Highlight a single element from the single-selection field', async ({ page }) => {
        await page.selectOption('select[id*=single_sel_field]', 'option_2');
        const isSelected = await page.$eval("option[value*='option_2']", option => option.selected);
        expect(isSelected).toBeTruthy();
    });

    // Test Case 3: Highlight several selections from the multiple-selection field
    test('Highlight several selections from the multiple-selection field', async ({ page }) => {
        await page.selectOption('select[id*=multi_sel_field]', ['option_2', 'option_3', 'option_4']);

        const selectedOptions = await page.$$eval('select[id*=multi_sel_field] option:checked', options => 
            options.map(option => option.value)
        );

        expect(selectedOptions).toContain('option_2');
        expect(selectedOptions).toContain('option_3');
        expect(selectedOptions).toContain('option_4');
    });

    // Test Case 4: Verify button press and message
    test('Verify button press and message', async ({ page }) => {
        page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('Button clicked');
            await dialog.dismiss();
        });
        await page.click('button');
    });

    // Test Case 5: Verify datalist element selection
    test('Verify datalist selection', async ({ page }) => {
        await page.fill('input[list="dropdown"]', 'dropdown_three');
        await page.dispatchEvent('input[list="dropdown"]', 'input');
        const value = await page.inputValue('input[list="dropdown"]');
        expect(value).toBe('dropdown_three');
    });

    // Test Case 6: Verify output elements
    test('Verify output elements', async ({ page }) => {
        await page.fill('input[id*=a]', '60');
        const outputText = await page.textContent('output[name*="x"]')
        expect(outputText).toBe('110');
    });

    // Test Case 7: Verify String is a palindrome
    test('Verify string is a palindrome', async ({ page }) => {
        const palindromeText = await page.textContent('text[id=palindrome]');
        // Assuming isPalindrome is a function you have defined to check palindromes
        expect(isPalindrome(palindromeText)).toBeTruthy();
    });
});

// Helper function for palindrome check
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

