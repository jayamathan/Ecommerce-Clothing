const addItemsToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find(
    item => item.id === cartItemsToAdd.id
  );
  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { cartItem }
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export default addItemsToCart;
