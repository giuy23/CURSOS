import "./App.css";
import { useCallback, useState } from "react";
import { ListMovies } from "./components/Movies/ListMovies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sorted, setSorted] = useState(false);
  const { movies, getMovies } = useMovies({ sorted });
  const { search, error, setSearch } = useSearch();

  const getMoviesBySearch = useCallback(
    debounce(({search}) => {
      getMovies({ search });
    }, 350),
    [getMovies]
  );

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    getMoviesBySearch({search});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSorted = () => {
    setSorted(!sorted);
  };

  return (
    <div className="page">
      <header>
        <h1>BUSCADOR DE PELÍCULAS</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            value={search}
            onChange={handleSearch}
            name="query"
            type="text"
            placeholder="Avengers, La vida es bella ..."
          />
          <input type="checkbox" value={sorted} onChange={handleSorted}></input>
          <button>Buscar</button>
        </form>
      </header>
      {error && <span style={{ color: "red" }}>{error}</span>}

      <main>
        <ListMovies movies={movies} />
      </main>
    </div>
  );
}

export default App;
