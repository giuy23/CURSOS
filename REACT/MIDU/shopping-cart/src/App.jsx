import { useEffect } from "react";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useProducts } from "./hooks/useProducts";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";

function App() {
  const { filterProducts } = useFilters();
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = filterProducts({ products });

  return (
    <>
      <Header />
      {products && <Products products={filteredProducts} />}
      <Footer />
      <Cart />
    </>
  );
}

export default App;
