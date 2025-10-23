import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test.describe('Authentication', () => {
  test('should authenticate user with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.navigate();

    // Verify we are on the login page
    await expect(page).toHaveURL('/login');

    // Steps 2-4: Enter credentials and submit
    await loginPage.login('10xadmin', '10xpassword');

    // Expected outcome: User is redirected to the main dashboard
    await expect(page).toHaveURL('/home');
  });
});
