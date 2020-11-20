import { cartActionTypes } from './cart.types';
import { removeItemFromCart,addItemToCart, calculateTotalPrice, calculateItemCount} from './cart.utils'


const INITIAL_STATE = {
    cartItems: [],
    itemCount: 0,
    totalPrice: 0
  }
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case cartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload),
          itemCount: state.itemCount + 1,
          totalPrice: calculateTotalPrice(state.cartItems, action.payload)
        }
      case cartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
          itemCount: state.itemCount - 1,
          totalPrice: calculateTotalPrice(state.cartItems, action.payload, true)
        }
      default:
        return state;
    }
  }
  
  export default cartReducer;