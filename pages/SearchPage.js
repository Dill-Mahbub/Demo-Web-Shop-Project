
export class SearchPage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('#small-searchterms');
    this.searchButton = page.locator('input.button-1.search-box-button');
    // this.searchResults = page.locator('.product-item');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async openSimpleComputer() {
    await this.page.getByRole('link', {
      name: 'Simple Computer',
      exact: true
    }).click();
  }
}
