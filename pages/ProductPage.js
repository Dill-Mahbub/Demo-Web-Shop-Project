export class ProductPage {
  constructor(page) {
    this.page = page;

    this.booksCategory = page.getByRole('link', {
  name: 'Books',
  exact: true
}).first();

    this.selectedProduct = page.getByRole('link', {
      name: 'Computing and Internet',
      exact: true
    });

    this.addToCartButton = page.locator('#add-to-cart-button-13');

    this.cartLink = page.getByRole('link', {
      name: 'Shopping cart'
    });

    this.addToCartNotification = this.page.locator(
  '.bar-notification.success'
    );

   // Q3 - Simple Computer Configuration
    this.processorSlow = page.locator('#product_attribute_75_5_31_96');
    this.ram4GB = page.locator('#product_attribute_75_6_32_101');
    this.hdd320GB = page.locator('#product_attribute_75_3_33_102');
    this.imageViewer = page.locator('#product_attribute_75_8_35_107');

    this.quantityInput = page.locator('#addtocart_75_EnteredQuantity');
    this.simpleComputerAddToCartButton = page.locator('#add-to-cart-button-75');

    // Q3 - Shopping Cart Checkout
    this.termsOfServiceCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
  }

  async openBooksCategory() {
    await this.booksCategory.click();
  }

  async openSelectedProduct() {
    await this.selectedProduct.click();
  }

  async addProductToCart() {
  await this.addToCartButton.click();

  await this.addToCartNotification.waitFor({
    state: 'visible',
    timeout: 15000
  });
}

  async openShoppingCart() {
  await this.page.goto('/cart');
}

// Q3 - Configure Simple Computer
async configureSimpleComputer() {
  await this.processorSlow.check();
  await this.ram4GB.check();
  await this.hdd320GB.check();
  await this.imageViewer.check();
}

// Q3 - Update Product Quantity
async updateQuantity(quantity) {
  await this.quantityInput.fill(String(quantity));
}

// Q3 - Add Simple Computer to Cart
async addSimpleComputerToCart() {
  await this.simpleComputerAddToCartButton.click();

  await this.addToCartNotification.waitFor({
    state: 'visible',
    timeout: 15000
  });
}

// Q3 - Agree to Terms and Proceed to Checkout
async proceedToCheckout() {
  await this.termsOfServiceCheckbox.check();
  await this.checkoutButton.click();
}
}