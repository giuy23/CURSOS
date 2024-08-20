import { useEffect } from "react";
import { useState } from "react";
import List from "../components/List";
import { Search } from "../components/Search";
import { useFecth } from "../services/useFecth";

export default function ProductsView() {
  const [products, setProducts] = useState({});
  const [search, setSearch] = useState("");

  const { getData } = useFecth();

  useEffect(() => {
    getData(search).then(data => {
      setProducts(data)
      console.log(data);
    });
  }, [search]);
  
  const searchData = (value) => {
    setSearch(value);
  };

  return (
    <>
      <header className="text-center">
        <h1 className=" text-white">TIENDA :v</h1>
      </header>

      <Search searchProduct={searchData} />

      <main>
        {products.length > 0 ? (
          <List className="" products={products} />
        ) : (
          <p>No hay Productos</p>
        )}
      </main>
    </>
  );
}
