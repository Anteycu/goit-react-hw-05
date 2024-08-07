import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { trendMoviesReq } from "../../apiMovies";
import Notifications from "../../components/Notifications/Notifications";
import s from "./HomePage.module.css";

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
    <div className="container">
      <h2 className={s.title}>Trending movies today</h2>
      {error ? (
        <Notifications type="error" msg={error} />
      ) : (
        <MovieList moviesData={movies} />
      )}
    </div>
  );
};
export default HomePage;
