### Iteration 1 - updateSubtotal

```js
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;
  product.querySelector('.subtotal > span').innerText = subtotal;
  return subtotal;
}
```

### Iteration 2 - updateSubtotal

```js
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */
  // end of test

  // ITERATION 2
  //... your code goes here
  document.querySelectorAll('.product').forEach(function (product) {
    console.log(product);
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
}
```

### Iteration 3 - Total

```js
function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let total = 0;
  document.querySelectorAll('.product').forEach(function (product) {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value').innerText = `Total: $${total}`;
  // ITERATION 3
  //... your code goes here
}
```

### Iteration 4 - Removing a product

#### First we need to add all the event listeners

```js
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(function (button) {
    button.onclick = removeProduct;
  });
});
```

#### And then add the removeProduct function
```js
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode);
  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}
```

### Iteration 5 - Create a product

#### Uncomment tfoot and it's children in the HTML

```html
<table>
  <tbody>
    <!-- ... -->
  </tbody>
  <!-- <tfoot>
    <tr class="create-product">
      <td>
        <input type="text" placeholder="Product Name" />
      </td>
      <td>
        <input type="number" min="0" value="0" placeholder="Product Price" />
      </td>
      <td></td>
      <td></td>
      <td>
        <button id="create" class="btn">Create Product</button>
      </td>
    </tr>
  </tfoot> -->
</table>
```

#### Add Event Listener

```js
window.addEventListener('load', () => {
  // 
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', () => {
    createProduct();
  });
});
```

#### Add Logic to createProduct

```js
function createProduct() {
  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
  newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value
  newProduct.querySelector('.subtotal span').innerText = 0
  newProduct.querySelector('.price span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value
  newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)
  const newTbody = document.querySelector('tbody')

  newTbody.appendChild(newProduct);
}
```