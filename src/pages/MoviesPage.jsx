import { useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMoviesReq } from "../apiMovies";
import Notifications from "../components/Notifications/Notifications";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const movies = await searchMoviesReq(form.elements.title.value);
      setMovies(movies);
    } catch (error) {
      setError(error.message);
    }
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
