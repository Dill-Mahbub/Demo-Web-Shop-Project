
import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test('Q3 - Search product and add to cart', async ({ page }, testInfo) => {

  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Search for a product
  await page.goto('/');
  await searchPage.searchProduct('computer');

  // Step 2: Verify search results
  await expect(page.getByRole('link', {
    name: 'Simple Computer',
    exact: true
  })).toBeVisible();

  // Step 3: Open Simple Computer
  await searchPage.openSimpleComputer();

  // Step 4: Configure the product
  await productPage.configureSimpleComputer();

  // Step 5: Increase quantity to 2
  await productPage.updateQuantity(2);

  // Verify quantity
  await expect(productPage.quantityInput).toHaveValue('2');

  // Step 6: Add product to cart
  await productPage.addSimpleComputerToCart();

  // Step 7: Open shopping cart
  await productPage.openShoppingCart();

  // Step 8: Verify product and quantity
  await expect(page.locator('.cart'))
    .toContainText('Simple Computer');

  await expect(page.locator('.qty-input'))
    .toHaveValue('2');

  // Step 9: Agree to Terms of Service
  await productPage.proceedToCheckout();

  // Step 10: Checkout as Guest
  await checkoutPage.checkoutAsGuest();

  // Step 11: Fill Billing Address
  await checkoutPage.fillBillingAddress();

  // Step 12: Continue Billing Address
  await checkoutPage.continueBillingAddress();

  // Step 13: Continue from Shipping Address
  await checkoutPage.continueShippingAddress();

  // Step 14: Select Ground Shipping and Continue
  await checkoutPage.continueShippingMethod();

  // Step 15: Select Cash On Delivery and Continue
  await checkoutPage.continuePaymentMethod();

  // Step 16: Continue from Payment Information
  await checkoutPage.continuePaymentInformation();

  // Step 17: Confirm Order
  await checkoutPage.confirmOrder();

  // Step 18: Verify Order Confirmation
  await expect(page.getByText(
    'Your order has been successfully processed!'
  )).toBeVisible();

  // Step 19: Get Dynamic Order Number
  const orderDetailsHref =
    await checkoutPage.orderDetailsLink.getAttribute('href');

  const orderNumber = orderDetailsHref.match(/orderdetails\/(\d+)/)[1];

  console.log('Order Number:', orderNumber);

  // Step 20: Open Order Details
  await checkoutPage.openOrderDetails();

  // Step 21: Verify Order Details Page
  await expect(page).toHaveURL(
    new RegExp(`/orderdetails/${orderNumber}`)
  );

  await expect(page.locator('body')).toContainText(orderNumber);
  await expect(page.locator('body')).toContainText('Simple Computer');

  // Step 22: Verify Product Quantity
  const productQuantity = page.locator('td.quantity');

  await expect(productQuantity).toHaveText(/Quantity:\s*2/);

  // Attach screenshot to Playwright and Allure reports
  await testInfo.attach('Q3 - Product Search and Checkout Screenshot', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png'
  });

});
