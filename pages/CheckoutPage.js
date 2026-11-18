export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Billing Address fields
    this.firstNameInput = page.locator('#BillingNewAddress_FirstName');
    this.lastNameInput = page.locator('#BillingNewAddress_LastName');
    this.emailInput = page.locator('#BillingNewAddress_Email');
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityInput = page.locator('#BillingNewAddress_City');
    this.addressInput = page.locator('#BillingNewAddress_Address1');
    this.zipCodeInput = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');
    this.billingContinueButton = page.locator('input[onclick="Billing.save()"]');
    this.checkoutAsGuestButton = page.locator('input.checkout-as-guest-button');
    
    // Shipping Address
    this.shippingAddressDropdown = page.locator('#shipping-address-select');
    this.shippingContinueButton = page.locator('input[onclick="Shipping.save()"]');

    // Shipping Method
    this.groundShippingOption = page.locator('#shippingoption_0');
    this.shippingMethodContinueButton = page.locator('input[onclick="ShippingMethod.save()"]');

    // Payment Method
    this.cashOnDeliveryOption = page.locator('#paymentmethod_0');
    this.paymentMethodContinueButton = page.locator('input[onclick="PaymentMethod.save()"]');

    // Payment Information
    this.paymentInfoContinueButton = page.locator('input[onclick="PaymentInfo.save()"]');

    // Confirm Order
    this.confirmOrderButton = page.locator('input[onclick="ConfirmOrder.save()"]');

    // Order Details
    this.orderDetailsLink = page.getByRole('link', {
    name: 'Click here for order details.',
    exact: true
    });
  }

  // Fill Billing Address
  async fillBillingAddress() {
    await this.firstNameInput.fill('Test');
    await this.lastNameInput.fill('Customer');
    await this.emailInput.fill('dill.test@example.com');

    await this.countryDropdown.selectOption('10');

    await this.cityInput.fill('Dhaka');
    await this.addressInput.fill('Test Road');
    await this.zipCodeInput.fill('1200');
    await this.phoneInput.fill('01700000000');
  }

  // Continue from Billing Address
  async continueBillingAddress() {
    await this.billingContinueButton.click();
    }

// Checkout as Guest
async checkoutAsGuest() {
    await this.checkoutAsGuestButton.click();
    }

// Continue from Shipping Address
async continueShippingAddress() {
    await this.shippingContinueButton.click();
    }

// Continue from Shipping Method
async continueShippingMethod() {
  await this.groundShippingOption.check();
  await this.shippingMethodContinueButton.click();
}

// Continue from Payment Method
async continuePaymentMethod() {
  await this.cashOnDeliveryOption.check();
  await this.paymentMethodContinueButton.click();
}

// Continue from Payment Information
async continuePaymentInformation() {
  await this.paymentInfoContinueButton.click();
}

// Confirm the Order
async confirmOrder() {
  await this.confirmOrderButton.click();
}

// Open Order Details
async openOrderDetails() {
  await this.orderDetailsLink.click();
}
}