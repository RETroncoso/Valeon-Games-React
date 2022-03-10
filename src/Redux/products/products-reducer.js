import { ProdRed } from "../../data/data";

const INITIAL_STATE = {
  productos: ProdRed,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
