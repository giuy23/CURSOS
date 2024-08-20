function List({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return (
    <ul style={{ textAlign: "center" }}>No hay películas con esa búsqueda</ul>
  );
}

export function ListMovies({ movies }) {
  const hasMovies = movies.length > 0;

  return hasMovies ? <List movies={movies} /> : <NoMovies />;
}
