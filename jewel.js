let cart = [];
let price = [];
let totalprice = 0;


function CartDisplay() {
    const displayContainer = document.getElementById('cartDisplay');
    displayContainer.innerHTML = ''; 
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerText = product
        displayContainer.appendChild(listItem);
    });
}
function PriceDisplay() {
    const displayContainer = document.getElementById('priceDisplay');
    displayContainer.innerHTML = ''; 
    price.forEach(prices => {
        const listItem = document.createElement('li');
        listItem.innerText = prices
        displayContainer.appendChild(listItem);
    });
}


function Item(checkbox, messageClass) {
    const message = document.querySelector(`.${messageClass}`);

    if (checkbox.checked) {
      message.innerText = `Added to cart!`;
      if (!cart.includes(itemName)) {
        cart.push(itemName);
        price.push(itemPrice);
      }
    } else { 
      message.innerText = '';
      cart = cart.filter(item => item !== itemName);
      price = price.filter((_, index) => price[index] !== itemPrice);
    }

    CartDisplay();
    PriceDisplay();
  }

 
