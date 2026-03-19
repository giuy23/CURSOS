import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    const minPrice = e.target.value;

    setFilters((prevState) => ({
      ...prevState,
      minPrice,
    }));
  };

  const handleChangeCategory = (e) => {
    const category = e.target.value;

    setFilters((prevState) => ({
      ...prevState,
      category,
    }));
  };

  return (
    <section className="filters">
      <div className="">
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type="range"
          name=""
          id={minPriceFilterId}
          min={0}
          max={100}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div className="">
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="beauty">Belleza</option>
          <option value="furniture">Muebles</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>
    </section>
  );
}
