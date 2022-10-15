var removeButtons = document.getElementsByClassName('remove-btn')
for (var i = 0; i < removeButtons.length; i++) {
    var button = removeButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('container')[0]
    var cartItem = cartItemContainer.getElementsByClassName('items')[0]
    var cartItemPrice = cartItem.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartItemPrice.length; i++) {
        var cartRow = cartItemPrice[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('total-price')[0].innerText = '$' + total + '.00'
}

document.getElementsByClassName('btn')[0].addEventListener('click', checkoutClicked)

function checkoutClicked(event) {
    alert('Thank You For Your Purchase, We Will Contact You Via Email Soon')
    var cartItems = document.getElementsByClassName('items')[0]
    while (cartItems.hasChildNodes){
        cartItems.removeChild(cartItems.firstChild)
        updateCartTotal()
    }
    
}

var quantityInputs = document.getElementsByClassName('quantity')
for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

var heartButton = document.getElementsByClassName('heart-btn')
for (var i = 0; i < heartButton.length; i++) {
    var redHeart = heartButton[i]
    redHeart.addEventListener('click', heartClicked)
}

function heartClicked(event) {
 redHeart = event.target
 redHeart.style.color = '#FF0000'
}
