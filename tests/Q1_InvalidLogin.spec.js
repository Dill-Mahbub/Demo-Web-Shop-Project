
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Q1 - Verify error message for invalid login', async ({ page }, testInfo) => {

  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.login('invaliduser123@gmail.com', 'WrongPassword123');

  // Verify error message
  await expect(loginPage.errorMessage).toBeVisible();

  await expect(loginPage.errorMessage).toContainText(
    'Login was unsuccessful'
  );

  // Verify user remains on login page
  await expect(page).toHaveURL(/login/);

  // Verify login form is still displayed
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();

  // Attach screenshot to Playwright and Allure reports
  await testInfo.attach('Q1 - Invalid Login Screenshot', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png'
  });

});
