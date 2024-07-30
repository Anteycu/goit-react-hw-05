import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import { searchMoviesReq } from "../apiMovies";
import Notifications from "../components/Notifications/Notifications";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") return;

    const fetchSearchMovies = async query => {
      try {
        const movies = await searchMoviesReq(query);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSearchMovies(query);
  }, [query]);

  const updateSearchParam = query => {
    const nextParam = query !== "" ? { query } : {};
    setSearchParams(nextParam);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    updateSearchParam(form.elements.title.value);
    form.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      <h2>Films you search</h2>
      {error ? (
        <Notifications type="error" msg={error} />
      ) : (
        <MovieList moviesData={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
