import { addItemToCart, removeItemsToCart } from "./cart-utils";
import { TOGGLE_CART, ADD_ITEM, REMOVE_ITEM } from "./cart-actions";

const INITIAL_STATE = {
  show: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        show: !state.show,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
