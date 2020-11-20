
export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.title === itemToRemove.title);
    
    if (existingCartItem) {
      return cartItems.filter(cartItem =>
        cartItem.title !==itemToRemove.title
        )
    }
    return cartItems;
  }
  
  export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.title === itemToAdd.title);
      
      if (existingCartItem) {
        const otherItems = cartItems.filter(cartItem => cartItem.title !==itemToAdd.title);
        const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity + 1 };
        return [updatedItem, ...otherItems];
      }
      return [{...itemToAdd, quantity: 1},...cartItems];
  }
  export const calculateItemCount = (cartItems) => {
    let itemCount = 0;
    cartItems.forEach(item => {
      itemCount += item.quantity;
    });
    return itemCount;    
  }
  export const calculateTotalPrice = (cartItems, item, remove) => {
    let totalPrice = 0;
    let newItems = cartItems;
    const itemPrice = parseInt(item.price);
    if(remove){
      newItems = cartItems.filter(cartItem =>
        cartItem.title !==item.title
        )
    }
    newItems.forEach(item => 
      totalPrice += item.quantity * parseInt(item.price)
      )
      
      totalPrice +=  remove ? 0 : itemPrice;
    return totalPrice;
  }

