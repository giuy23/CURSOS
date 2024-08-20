import React, { useEffect, useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/ShoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "../actions/shoppingActions";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart, total } = state;

  const addTocart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    
  };
  const delFromcart = (id, all) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      
    }
  };
  const clearcart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    
  };

  // Llamar a TOTAL_AMOUNT después de las operaciones que puedan afectar al total
  useEffect(() => {
    dispatch({ type: TYPES.TOTAL_AMOUNT });
  }, [cart]);

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Productos</h3>

      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addTocart} />
        ))}
      </article>
      <h3>Carrito</h3>

      <article className="box font-black">
        <button onClick={clearcart}>Limpiar Carrito</button>
        <span style={{display: "flex", justifyContent: "end"}}> TOTAL $: { total ? total : 0}</span>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromcart={delFromcart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
