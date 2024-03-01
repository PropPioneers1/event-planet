import {
  DECREMENT_CART_PRODUCT,
  INCREMENT_CART_PRODUCT,
  RESET_CART,
} from "../constants/constants";

export const incrementProduct = (amount) => {
  return {
    type: INCREMENT_CART_PRODUCT,
    payload: amount,
  };
};
export const decrementProduct = (amount) => {
  return {
    type: DECREMENT_CART_PRODUCT,
    payload: amount,
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
