# Demo Web Shop – UI & API Automation Testing

## Project Overview

This project focuses on automating UI and API testing for the Demo Web Shop application. It uses Playwright with JavaScript for UI automation and Postman/Newman for API testing.

The project follows the Page Object Model (POM) design pattern and includes automated test execution, assertions, screenshots, and test reports.

**Website:** https://demowebshop.tricentis.com/

**API:** https://jsonplaceholder.typicode.com/users

## Tech Stack

- JavaScript
- Playwright
- Postman
- Newman
- Newman HTML Extra Reporter
- Allure Reporting
- Node.js
- Git & GitHub
- VS Code

## Project Structure

```text
Demo-Web-Shop-Project/
│
├── api-tests/
│   ├── Demo Web Shop API Automation.postman_collection.json
│   └── newman-report.html
│
├── pages/
│   ├── LoginPage.js
│   ├── RegistrationPage.js
│   ├── ProductPage.js
│   ├── SearchPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── Q1_InvalidLogin.spec.js
│   ├── Q2_RegisterAddToCart.spec.js
│   └── Q3_SearchCheckout.spec.js
│
├── screenshots/
│   └── API/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## UI Test Scenarios

### Q1 – Invalid Login
- Attempt login using invalid credentials.
- Verify the error message.
- Verify that the user is not logged in.

### Q2 – Register and Add Product to Cart
- Register a new customer.
- Navigate to the product category.
- Select and add a product to the cart.
- Verify the product and quantity.

### Q3 – Product Search and Checkout
- Search for a product.
- Verify the search result.
- Open the product and update quantity.
- Add the product to the cart.
- Complete the checkout process.
- Verify order confirmation and order details.

## API Test Scenarios

The Postman collection contains three automated requests:

1. **GET – All Users:** Retrieve all users and validate the response.
2. **GET – Single User:** Retrieve a user using the saved dynamic User ID.
3. **PUT – Update User:** Update user information and validate the response.

The collection is available in the `api-tests/` directory and can be executed using Newman.

## Installation & Setup

Make sure Node.js is installed.

Clone the repository:

```bash
git clone https://github.com/Dill-Mahbub/Demo-Web-Shop-Project.git
```

Navigate to the project directory:

```bash
cd Demo-Web-Shop-Project
```

Install dependencies:

```bash
npm install
```

Install Playwright Chromium:

```bash
npx playwright install chromium
```

## Test Execution

### Run Individual UI Tests

```bash
npm run test:q1
```

```bash
npm run test:q2
```

```bash
npm run test:q3
```

### Run All UI Tests

```bash
npm test
```

### Run API Tests

```bash
npm run test:api
```

### Run All UI and API Tests Sequentially

```bash
npm run test:all
```

## Test Reports

### Playwright HTML Report

```bash
npx playwright show-report
```

### Generate Allure Report

```bash
npm run report:allure
```

### Open Allure Report

```bash
npm run report:open
```

### Newman HTML Report

The Newman HTML report is automatically generated after API execution:

```text
api-tests/newman-report.html
```

## Reporting & Evidence

- Playwright HTML report includes test execution results and attached screenshots.
- Allure report provides test details and screenshot attachments.
- Newman HTML Extra report provides API request and assertion results.
- API screenshots are stored in the `screenshots/API/` directory.

## Author

**Md. Dill Mahbub**

Ostad – AI Driven SQA: Manual & Automation Testing

GitHub: https://github.com/Dill-Mahbub