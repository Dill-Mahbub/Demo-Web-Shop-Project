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
}