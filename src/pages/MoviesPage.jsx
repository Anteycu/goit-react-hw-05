import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMoviesReq } from "../apiMovies";
import Notifications from "../components/Notifications/Notifications";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const movies = await searchMoviesReq("ukraine");
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSearchMovies();
  }, []);

  return (
    <div>
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
