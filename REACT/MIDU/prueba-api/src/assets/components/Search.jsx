import { useState } from "react";

export function Search({ searchProduct }) {
  const [valueToSearch, setValueToSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValueToSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct(valueToSearch);
    setValueToSearch('')
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleSearch} value={valueToSearch} />
      <button type="submit">Buscar</button>
    </form>
  );
}
