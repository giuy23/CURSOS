import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
export function useMovies({ sorted }) {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef();

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    previousSearch.current = search;
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  }, []);

  const sortedMovies = useMemo(() => {
    return sorted
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sorted, movies]);

  return {
    movies: sortedMovies,
    getMovies,
  };
}
