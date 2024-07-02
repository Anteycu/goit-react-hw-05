import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMoviesReq } from "../apiMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      const movies = await searchMoviesReq("ukraine");
      setMovies(movies);
    };
    fetchSearchMovies();
  }, []);

  return (
    <div>
      <p>Films with search result: ...</p>
      <MovieList moviesData={movies} />
    </div>
  );
};

export default MoviesPage;
