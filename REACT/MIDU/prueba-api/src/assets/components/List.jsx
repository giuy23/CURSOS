import { useState } from "react";
import Cart from "./Cart";

export default function List({ products }) {
  const [productsCart, setProductsCart] = useState(() => {
    const productsFromStorage = localStorage.getItem("products");
    return productsFromStorage ? JSON.parse(productsFromStorage) : [];
  });

  const updatedCart = (productsCart, productToAdd) => {
    const existingProductIndex = productsCart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = productsCart.map((item, index) => {
        if (index === existingProductIndex) {
          const newQuantity = item.quantity + productToAdd.quantity;

          if (newQuantity > productToAdd.stock) {
            console.log("Cannot add more than available stock");
            return item; // No se actualiza el producto si excede el stock
          }
          return {
            ...item,
            quantity: newQuantity,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("products", JSON.stringify(updatedCart));
      return updatedCart;
    }

    const newProductToCart = [...productsCart, productToAdd];
    localStorage.setItem("products", JSON.stringify(newProductToCart));
    return newProductToCart;
  };

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      stock: product.stock,
      price: product.price,
      quantity: 1,
    };
    const newCart = updatedCart(productsCart, productToAdd);
    setProductsCart(newCart);
  };

  return (
    <>
      <Cart products={productsCart} />

      <div className="grid grid-cols-4 gap-4">
        {products &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className=" text-yellow-50"
                style={{
                  border: "solid 1px green",
                }}
              >
                <figure>
                  <img
                    src={product.thumbnail}
                    className="w-full h-full"
                    alt=""
                  />
                </figure>
                <nav>
                  <div type="submit" onClick={() => handleAddToCart(product)}>
                    Agregar
                  </div>
                </nav>
                {product.title}
              </div>
            );
          })}
      </div>
    </>
  );
}
