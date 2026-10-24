/* 
1. Create an object to hold  products data (price, quantity)
2. Select interactive elements
3. Add event listeners to interactive elements (add to cart, remove, clear cart)
4. Connect necessary logical functions to the event listeners.
*/

const clearCart = document.getElementById('clear_cart');
const totalPriceSpan = document.getElementById('total_price');

const products = {
  apples: {
    price: 1,
    quantity: 0,
  },
  bananas: {
    price: 1,
    quantity: 0,
  },
  bread: {
    price: 1,
    quantity: 0,
  },
  eggs: {
    price: 1,
    quantity: 0,
  },
};

clearCart.addEventListener('click', () => console.log('Clear cart clicked.'));
// productName_add

const productNames = Object.keys(products);

for (const name of productNames) {
  const addToCartButtonId = name + '_add';
  const removeFromCartButtonId = name + '_remove';
  console.log(addToCartButtonId, removeFromCartButtonId);

  document
    .getElementById(addToCartButtonId)
    .addEventListener('click', () => addToCart(name));
  document
    .getElementById(removeFromCartButtonId)
    .addEventListener('click', () => removeFromCart(name));
}

function addToCart(productName) {
  products[productName].quantity += 1;

  if (products[productName].quantity >= 0) {
    document
      .getElementById(productName + '_remove')
      .removeAttribute('disabled');
  }
  const productQuantitySpan = document.getElementById(
    productName + '_quantity',
  );
  productQuantitySpan.textContent = products[productName].quantity;

  updateTotal();

  // Add if statement to enable the removeFromCart button again
}

function removeFromCart(productName) {
  if (products[productName].quantity >= 1) {
    products[productName].quantity -= 1;
    const productQuantitySpan = document.getElementById(
      productName + '_quantity',
    );
    productQuantitySpan.textContent = products[productName].quantity;
    updateTotal();
  } else {
    document
      .getElementById(productName + '_remove')
      .setAttribute('disabled', 'true');
  }
}

function updateTotal() {
  let totalPrice = 0;
  for (const productKey in products) {
    const product = products[productKey];
    totalPrice += product.price * product.quantity;
  }
  totalPriceSpan.textContent = totalPrice;
}
