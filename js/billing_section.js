document.addEventListener('DOMContentLoaded', () => {
  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Calculate the total bill amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  
  // Display the total bill amount on the billing page
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.textContent = `${totalAmount.toFixed(2)} Rupess`;
  
});
