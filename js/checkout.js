
let ProceedToCheckout = document.getElementById('ProceedToCheckout');
ProceedToCheckout.addEventListener('click', function () {
    $('.payingMethod').slideDown(1000);
});

// Payment Method
let checkOut = document.getElementById('checkOut');
checkOut.addEventListener('click', function () {

    let checkBox = document.getElementsByName('payingMethod');

    if (checkBox[0].checked || checkBox[1].checked || checkBox[2].checked || checkBox[3].checked) {
        $('#userInfo').slideDown(1000);
    }
    else {
        $('.payingMethod .alert').fadeIn(500);
        $('.payingMethod').css('height', '480px');
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].addEventListener('click', function () {
                $('.payingMethod .alert').fadeOut(500);
                $('.payingMethod').css('height', '390px');
            })
        }
    }

});

// Appearing User Info Input
let orderNow = document.getElementById('orderNow');
orderNow.addEventListener('click', function () {
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('email');
    let adress = document.getElementById('adress');
    let phoneNumber = document.getElementById('phoneNumber');
    $('.payingMethod .alert').fadeOut(500);
    if (fullName.value != "" && email.value != "" && adress.value != "" && phoneNumber.value != "") {
        $('#endingMessage').fadeIn(1000);
        // Final Message
        let userName = document.getElementById('userName')
        userName.innerHTML = "Thanks Mr. " + fullName.value;
        // goes to home after 2s
        setTimeout(function () {
            window.location.href = "index.html"
        }, 2000)
    }
    else {
        $('#userInfo .alert').fadeIn(500);
        fullName.addEventListener('keyup', () => {
            $('.alert').fadeOut(250);
        })
    }

});

// Pricing
let poductPrice = JSON.parse(localStorage.getItem('totalPrice'));
poductPrice = parseInt(poductPrice.toFixed(3))
let taxes = parseInt((poductPrice * 0.14).toFixed(3));
let productPrceArea = document.getElementById('productPrceArea');
let taxesArea = document.getElementById('taxesArea');
let totalFeess = document.getElementById('totalPrice');

productPrceArea.innerHTML = "$" + poductPrice;
taxesArea.innerHTML = "$" + taxes;
totalFeess.innerHTML = "$" + (poductPrice + 50 + taxes);

