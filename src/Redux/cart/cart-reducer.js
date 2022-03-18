import { TOGGLE_CART } from "./cart-actions";

const INITIAL_STATE = {
  show: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default cartReducer;
