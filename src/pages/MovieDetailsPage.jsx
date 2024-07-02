import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { movieDetailsReq } from "../apiMovies";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await movieDetailsReq(movieId);
        setFilm(movieDetails);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <p>Something goes wrong: {error}</p>
      ) : (
        <h2>Movie title {film.original_title}</h2>
      )}
      <Link to={"cast"}>Cast</Link>
      <Link to={"reviews"}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
