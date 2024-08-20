import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar por espacios vacíos");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar por números");
      return;
    }
    if (search.length <= 3) {
      setError("No se puede buscar por tres palabras");
      return;
    }
    setError(null);
  }, [search]);

  return {
    search,
    error,
    setSearch,
  };
}
