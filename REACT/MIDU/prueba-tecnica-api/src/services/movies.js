export const searchMovies = async ({ search }) => {
  if (search === "") return [];

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}s='${search}'`
    );
    const json = await response.json();

    if (json.Response === "False") {
      return [];
    }

    const movies = json.Search;
    return movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    return [];
  }
};
