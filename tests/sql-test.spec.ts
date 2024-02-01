import { test } from '@playwright/test';
const axios = require('axios');

test.describe('Simple SQL Test', () => {
    test("Verify status code", async () => {
        const response = await axios.get("https://dustinsison.com/");
        // Verify the status code
        test.expect(response.status).toBe(200);
    });
});
