import { useEffect, useState } from "react";
import { Products } from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();

      setProducts(products);
    };

    getProducts();
  }, []);

  const filterProducts = ({products}) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts({products})

  return <>{products && <Products products={filteredProducts} />}</>;
}

export default App;
