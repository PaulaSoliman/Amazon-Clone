// Product Details Area
let product = JSON.parse(localStorage.getItem('productDetails'));
let temp = "";
temp = `
<div class="col-md-4 py-4">
<div class="productImage">
  <img class="w-100" src="${product.image}" alt="">
</div>
</div>

<div class="col-md-6">
<div class="productContent p-5">
<h2 class="p-3 fw-bold">${product.title}</h2>
<div class="pt-3">
  <h3>Description: </h3>
  <p class="ps-4 text-muted h5">${product.description}</p>
</div>

<div class="pt-4">
  <h3>Category: </h3>
  <p class="ps-4 text-muted h5">${product.category}</p>
</div>

<div class="pt-4">
  <h3>Price: </h3>
  <p class="ps-4 text-muted h5">$${product.price}</p>
</div>

</div>
</div>
`
document.getElementById('displayData').innerHTML = temp;
// Buying Details Area
let buyingDetails = "";
buyingDetails = `
<p><sup class="fs-5">$</sup><span class="fw-bold fs-3">${product.price}</span><sup class="fs-5">USD</sup></p>
      <p>Delivery <span class="fw-bold">Thursday, April 7</span></p>
      <p>Or fastest delivery <span class="fw-bold">Tuesday, April 5</span></p>
      <div class="d-flex align-items-center">
        <i class="fas fa-map-marker-alt h4"></i>
        <p class="text-muted ps-3 fw-bold">Delivery To Egypt</p>
      </div>

      <div class="d-flex align-items-center">
        <p class="h4 fw-bold" style="color: rgb(111, 255, 15);">In Stock.</p>
        <h6 class="px-3">7</h6>
      </div>
      <button class="btn btn-outline-warning w-100 mt-3 add-cart">Add to cart</button>
      <button class="btn btn-outline-primary w-100 mt-3" id="buyNow">Buy Now</button>
`
document.getElementById('buyingArea').innerHTML = buyingDetails;

// Adding Cart and buy
(function onLoadCartNumber() {
  if (localStorage.getItem('productNumbers') != null) {
    let productNumbers = localStorage.getItem('productNumbers');
    productNumbers = parseInt(productNumbers);
    document.getElementById('cartNumbers').innerHTML = productNumbers;
  }
  else {
    document.getElementById('cartNumbers').innerHTML = 0;
  }
})();

// Add Cart
(function addCarts() {
  let cart = document.querySelector('.add-cart');
  cart.addEventListener('click', function () {
    cartNumbers();
  })
})()

function cartNumbers() {
  let productNumbers = localStorage.getItem('productNumbers');
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem('productNumbers', productNumbers + 1);
    document.getElementById('cartNumbers').innerHTML = productNumbers + 1;
  }
  else {
    localStorage.setItem('productNumbers', 1);
    document.getElementById('cartNumbers').innerHTML = 1;
  }
  setItems();
}

function setItems() {
  let cartItems = [];
  if (localStorage.getItem('cart') != null) {
    cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  else {
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
}

// Buying Now
(function goToCartPage() {
  let buyNow = document.getElementById('buyNow');
  let goCart = document.querySelector('.goCart');

  buyNow.addEventListener('click', () => {
    window.location.href = 'cart.html';
  })
  goCart.addEventListener('click', () => {
    window.location.href = 'cart.html';
  })
})()