export class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.registerLink = page.getByRole('link', {
      name: 'Register'
    });

    this.maleRadio = page.locator('#gender-male');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');

    this.successMessage = page.locator('.result');
  }

  async openRegistrationPage() {
    await this.page.goto('/register');
  }

  async registerUser(firstName, lastName, email, password) {
    await this.maleRadio.check();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();
  }

  async isRegistrationSuccessful() {
    await this.successMessage.waitFor({ state: 'visible' });
    return await this.successMessage.textContent();
    }
}