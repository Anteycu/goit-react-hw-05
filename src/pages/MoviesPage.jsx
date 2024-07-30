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

  const searchQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (searchQuery === "") return;

    const fetchMovies = async () => {
      try {
        const movies = await searchMoviesReq(searchQuery);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.title.value;
    const nextParam = query !== "" ? { query } : {};
    setSearchParams(nextParam);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} searchQuery={searchQuery} />
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
