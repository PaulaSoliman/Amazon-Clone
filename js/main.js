
let products;
(async function getProducts(catecory = "men's clothing") {
    let response = await fetch(`https://fakestoreapi.com/products`);
    products = await response.json();
    displayData()
    addCarts()
})()

function displayData() {
    let temp = "";
    for (let i = 0; i < products.length; i++) {
        temp += `
        
        <div class="col-md-3">
          <div class="productItem">
          <a class="text-decoration-none text-black" onclick="productDetails(${i})">
            <img src="${products[i].image}" alt="">
            </a>
            <p>${products[i].title}</p>
            <div class=" footerContent">
            <p>$ ${products[i].price}</p>
              <button class="btn text-white w-100 add-cart">Add to cart</button>
              </div>
          </div>
        </div>
        `
    }
    document.getElementById('displayData').innerHTML = temp;
}
// Adding products to carts
function addCarts() {
    let carts = document.querySelectorAll('.add-cart');
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', function () {
            cartNumbers(products[i]);
        })
    }
}
// Counter for cartNumber
function cartNumbers(product) {
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
    setItems(product);
}
// Set Items in localStorage for Shopping
function setItems(product) {
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
//  Showing Product Details
function productDetails(index){
    localStorage.setItem('productDetails',JSON.stringify(products[index]));
    window.location.href="productDetails.html";
}

(function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('productNumbers');
    if (productNumbers) {
    document.getElementById('cartNumbers').innerHTML = productNumbers;
    }
})()

