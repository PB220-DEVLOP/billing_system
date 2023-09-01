document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-list');
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const itemText = document.createElement('span');
    itemText.textContent = `${item.name} :- ${item.price} Rupees`;
    listItem.appendChild(itemText);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
    removeButton.addEventListener('click', () => removeFromCart(index));
    listItem.appendChild(removeButton);

    cartContainer.appendChild(listItem);
  });
  });

function removeFromCart(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload(); // Refresh the page to reflect the changes
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const generateBillBtn = document.getElementById('generate-bill-btn');
  
  generateBillBtn.addEventListener('click', () => {
    generateBill();
  });

  function generateBill() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    // Display total bill using a toast
    const totalBillToast = new bootstrap.Toast(document.getElementById('totalBillToast'));
    const totalBillToastBody = document.getElementById('totalBillToastBody');
    totalBillToastBody.textContent = `${totalAmount} Rupees`;
    totalBillToast.show();
  }
  const clearCartBtn = document.getElementById('clear-cart-btn');
  clearCartBtn.addEventListener('click', clearCart);

  function clearCart() {
    // Clear the cart and update localStorage
    localStorage.removeItem('cart');
    // Reload the page to reflect the changes
    location.reload();
  }
});


