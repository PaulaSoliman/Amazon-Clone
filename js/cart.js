// Import data from localStorage
let products = JSON.parse(localStorage.getItem('cart'));
let productNumbers = localStorage.getItem('productNumbers');

// Selectors
let tableOfItems = document.getElementById('tableOfItems');
let emptyCart = document.getElementById('emptyCart');
let clearAll = document.getElementById('clearAll');
let checkOutArea = document.getElementById('checkOutArea');
let totalPriceArea = document.getElementById('totalPriceArea');
let totalPrice = document.getElementById('totalPrice');
let subTotalItems=document.getElementById('subTotalItems');
let quantity = [];

// Sync the number of items in cart Area
(function onLoadCartNumber() {
    if (localStorage.getItem('productNumbers') != null && productNumbers != 0) {
        productNumbers = parseInt(productNumbers);
        document.getElementById('cartNumbers').innerHTML = productNumbers;
        tableOfItems.classList.remove('d-none');
        checkOutArea.classList.remove('d-none');
        totalPriceArea.classList.remove('d-none');
        displayData()
        gettotalPrice()
    }
    else {
        document.getElementById('cartNumbers').innerHTML = 0;
        emptyCart.classList.remove('d-none');
        tableOfItems.classList.add('d-none');
        checkOutArea.classList.add('d-none');
        totalPriceArea.classList.add('d-none');
    }
})();

// Display Products
function displayData() {
    let temp = '';
    for (let i = 0; i < products.length; i++) {
        temp += `
        <tr class="px-3 text-center">
            <td class="index">${i + 1}</td>
            <td style="width:25%;"><img class="w-50" src="${products[i].image}" alt="" onclick="productDetails(${i})"></td>
            <td style="width:10%;" class="title">${products[i].title}</td>
            <td style="width:25%;" class="desc">${products[i].description}</td>
            <td style="width:10%;">${products[i].price}</td>
            <td style="width:10%;"><input class="form-control w-100" value=1 type="number" class="quantity"></td>
            <td scope="col"><button class="btn btn-danger fs-4" onclick="removeItem(${i})"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
        `
    }
    document.getElementById('displayData').innerHTML = temp;
    quantity = document.getElementsByTagName(`input`);
}

// Remove Items
function removeItem(index) {
    products.splice(index, 1);
    productNumbers = products.length;
    localStorage.setItem('productNumbers', JSON.stringify(productNumbers));
    document.getElementById('cartNumbers').innerHTML = productNumbers;
    localStorage.setItem('cart', JSON.stringify(products));

    if (productNumbers == 0) {
        emptyCart.classList.remove('d-none');
        tableOfItems.classList.add('d-none');
        checkOutArea.classList.add('d-none');
        totalPriceArea.classList.add('d-none');
    }
    displayData()
    gettotalPrice()
}

// Clear All
clearAll.addEventListener('click', function () {
    localStorage.removeItem('cart');
    localStorage.setItem('productNumbers', 0);

    document.getElementById('cartNumbers').innerHTML = 0;

    emptyCart.classList.remove('d-none');
    tableOfItems.classList.add('d-none');
    checkOutArea.classList.add('d-none');
    totalPriceArea.classList.add('d-none');

    displayData()
})

// Get Total price
function gettotalPrice() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += (products[i].price);
    }
    subTotalItems.innerHTML=`Subtotal (${productNumbers} items):`;
    totalPrice.innerHTML = '$' + total.toFixed(2);
    localStorage.setItem('totalPrice', JSON.stringify(total));
}

// Goes to Product details
function productDetails(index){
    localStorage.setItem('productDetails',JSON.stringify(products[index]));
    window.location.href="productDetails.html";
}