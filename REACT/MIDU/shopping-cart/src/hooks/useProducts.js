import { useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();
      setProducts(products);
    } catch (error) {
      setProducts([]);
    }
  };

  return {
    products,
    getProducts,
  };
}
