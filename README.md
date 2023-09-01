# Restaurant Billing System

This is a simple web-based restaurant billing system that allows users to select items from a menu, add them to a cart, and generate a bill. The system includes a menu page, a cart/dashboard page, and a billing page with payment options.

## Features

- View a list of menu items.
- Add and remove items to/from the cart.
- Calculate the total bill amount.
- Choose from multiple payment methods: Online Banking, UPI, and Card Payment.
- Display payment-related modals and QR codes based on the selected payment method.

## Technologies Used

- HTML
- JavaScript
- CSS (Bootstrap for styling)
- [Font Awesome](https://fontawesome.com/) for icons
- QR code generation library (e.g., QRCode.js)

## Project Structure

- `menu.html` and `menu.js`: Display the restaurant menu.
- `cart.html` and `cart.js`: Manage the user's cart and calculate the bill.
- `billing.html` and `billing.js`: Provide payment options and display QR codes/modal forms.

## Usage

1. **Menu Page (`menu.html`):**
   - Visit `menu.html` to view the restaurant menu.
   - Click the "Add to Cart" button to add items to your cart.

2. **Cart/Dashboard Page (`cart.html`):**
   - Visit `cart.html` to view the items in your cart.
   - Click the "Generate Bill" button to calculate the total bill.
   - Click the "Remove" button next to an item to remove it from the cart.
   - Click the "Clear Cart" button to remove all items from the cart.

3. **Billing Page (`billing.html`):**
   - Visit `billing.html` to choose a payment method.
   - Select a payment method: Online Banking, UPI, or Card Payment.
   - Follow the instructions to complete the payment process.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/restaurant-billing-system.git

