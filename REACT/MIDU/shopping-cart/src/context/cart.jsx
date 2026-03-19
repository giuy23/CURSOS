import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = (product) => {
    const index = cartProducts.findIndex((el) => el.id === product.id);

    if (index >= 0) {
      const newCart = structuredClone(cartProducts);
      newCart[index].quantity += 1;
      return setCartProducts(newCart);
    }

    setCartProducts((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCartProducts([]);
  };

  const removeFromCart = (product) => {
    setCartProducts((prevState) =>
      prevState.filter((el) => el.id !== product.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
