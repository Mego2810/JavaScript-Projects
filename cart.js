// cart.js

// Sample cart data
const cartItems = [];

// Function to update the cart
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Clear existing cart items
  cartList.innerHTML = '';

  // Populate cart items
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' - $' + item.price.toFixed(2);
    cartList.appendChild(li);
  });

  // Calculate and display cart total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  cartTotal.textContent = 'Cart Total: $' + total.toFixed(2);
}

function addToCart(name, price) {
  // Add the selected product to the cartItems array
  cartItems.push({ name, price });

  // Call the updateCart function to refresh the cart details
  updateCart();
}
