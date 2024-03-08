// state

import {
  DECREMENT_CART_PRODUCT,
  INCREMENT_CART_PRODUCT,
  RESET_CART,
} from "../constants/constants";

const productQuantity = JSON.parse(localStorage.getItem("cartProduct"));

const initialCartProduct = {
  cartProduct: productQuantity ? productQuantity : 0,
};

const cartProductReducer = (state = initialCartProduct, action) => {
  switch (action.type) {
    case INCREMENT_CART_PRODUCT:
      return {
        ...state,
        cartProduct: state.cartProduct + action.payload,
      };

    case DECREMENT_CART_PRODUCT:
      return {
        ...state,
        cartProduct: state.cartProduct - action.payload,
      };
    case RESET_CART:
      return {
        ...state,
        cartProduct: 0,
      };

    default:
      return state;
  }
};

export default cartProductReducer;
