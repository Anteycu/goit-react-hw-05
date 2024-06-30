import MovieList from "../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { trendMoviesReq } from "../apiMovies";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const movies = await trendMoviesReq("day");
        setMovies(movies);
      } catch (error) {
        setError(error);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div>
      <h2>Trending movies</h2>
      {error ? (
        <p>Something goes wrong: {error} </p>
      ) : (
        <MovieList moviesData={movies} />
      )}
    </div>
  );
};
export default HomePage;
