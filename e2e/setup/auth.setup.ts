import { test as setup } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

const authFile = './e2e/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to login page
  await loginPage.navigate();

  // Perform login with test credentials
  await loginPage.login('10xadmin', '10xpassword');

  // Wait for successful login redirect to home page
  await page.waitForURL('/home');

  // Save signed-in state to be reused in authenticated tests
  await page.context().storageState({
    path: authFile
  });
});
