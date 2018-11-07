var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
  cart.push(newItem); 
  return newItem.itemName + " has been added to your cart.";
}

function viewCart() {
  var cartStem = "In your cart, you have "; 
  var cartContent = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1 ) {
    return cartStem + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  } else {
    for (let i = 0; i < cart.length-1; i++) {
       cartContent.push(cart[i].itemName + " at $" + cart[i].itemPrice);
    }
       return cartStem + cartContent.join(", ") + ", and " + cart[cart.length-1].itemName + " at $" + 
       cart[cart.length-1].itemPrice + ".";
  }
}

function total() {
  var cartCost = 0;
  for (let i=0; i<cart.length; i++) {
    cartCost = cartCost + cart[i].itemPrice;
  }
  return cartCost;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (i === cart.length) {
      return "That item is not in your cart.";
    } else if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }  
  }
}

function placeOrder(cardNumber) {
  getCart();
  total();
  if ('$cardNumber'.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return "Your total cost is $" + cartCost + ", which will be charged to the card " + cardNumber + ".";
  }
}
