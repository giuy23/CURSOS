import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  TOTAL_AMOUNT,
} from "../types";

//SHOPPING
export const addToCart = (id) => 
  ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) => 
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };
;
export const clearCart = () => 
  ({ type: CLEAR_CART });
;

export const updatePrice = () => ({type: TOTAL_AMOUNT})
