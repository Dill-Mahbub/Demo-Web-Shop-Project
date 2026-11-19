
import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage.js';
import { ProductPage } from '../pages/ProductPage.js';

test('Q2 - Register a new user and add a product to cart', async ({ page }, testInfo) => {

  const registrationPage = new RegistrationPage(page);
  const productPage = new ProductPage(page);

  // Step 1: Generate a unique email for every test run
  const email = `dill${Date.now()}@gmail.com`;
  const password = 'Test@12345';

  // Step 2: Open Registration Page
  await registrationPage.openRegistrationPage();

  // Step 3: Register a new customer
  await registrationPage.registerUser(
    'Dill',
    'Mahbub',
    email,
    password
  );

  // Step 4: Verify successful registration
  await expect(registrationPage.successMessage).toBeVisible();
  await expect(registrationPage.successMessage)
    .toContainText('Your registration completed');

  // Step 5: Verify automatic login
  await expect(page.getByRole('link', { name: email }))
    .toBeVisible();

  await expect(page.getByRole('link', { name: 'Log out' }))
    .toBeVisible();

  // Step 6: Open Books category
  await productPage.openBooksCategory();

  // Step 7: Select Computing and Internet book
  await productPage.openSelectedProduct();

  // Step 8: Add product to cart
  await productPage.addProductToCart();

  // Step 9: Open Shopping Cart
  await productPage.openShoppingCart();

  // Step 10: Verify product is in cart
  await expect(page.locator('.cart')).toContainText(
    'Computing and Internet'
  );

  // Step 11: Verify product quantity
  await expect(page.locator('.qty-input')).toHaveValue('1');

  // Attach screenshot to Playwright and Allure reports
  await testInfo.attach('Q2 - Register and Add to Cart Screenshot', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png'
  });

});
