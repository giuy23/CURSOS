import React, { useEffect } from "react";

import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, delFromCart, updatePrice } from "../actions/shoppingActions";

const ShoppingCart = () => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //const { products, cart, total } = state;
  const { products, cart, total } = useSelector(state => state.shopping);

  // Llamar a TOTAL_AMOUNT después de las operaciones que puedan afectar al total
  useEffect(() => {
    dispatch(updatePrice())
  }, [cart]);

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Productos</h3>

      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>

      <article className="box font-black">
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        <span style={{ display: "flex", justifyContent: "end" }}>
          {" "}
          TOTAL $: {total ? total : 0}
        </span>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromcart={() => dispatch(delFromCart(item.id))}
            delAllFromcart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
