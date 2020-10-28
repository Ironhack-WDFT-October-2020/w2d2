// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;
  product.querySelector('.subtotal > span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  document.querySelectorAll('.product').forEach(function (product) {
    console.log(product);
    total += updateSubtotal(product);
  });
  console.log(total);
  document.querySelector('#total-value').innerText = `Total: $${total}`;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  const product = target.parentNode.parentNode;
  product.remove();
  // target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
  // const newProduct = document.createElement('tr');
  // newProduct.className = 'product';
  // newProduct.innerHTML = `
  //     <td class="name">
  //       <span>Ironhack Rubber Duck</span>
  //     </td>
  //     <td class="price">$<span>25.00</span></td>
  //     <td class="quantity">
  //       <input type="number" value="0" min="0" placeholder="Quantity" />
  //     </td>
  //     <td class="subtotal">$<span>0</span></td>
  //     <td class="action">
  //       <button class="btn btn-remove">Remove</button>
  //     </td>
  // `;
  newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value
  newProduct.querySelector('.subtotal span').innerText = 0
  newProduct.querySelector('.price span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value
  newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)
  const tBody = document.querySelector('tbody')

  tBody.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(function (button) {
    button.onclick = removeProduct;
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', () => {
    createProduct();
  });
});
