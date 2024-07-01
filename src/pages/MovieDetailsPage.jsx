import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { movieDetailsReq } from "../apiMovies";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await movieDetailsReq(movieId);
      setFilm(movieDetails);
    };

    fetchMovieDetails();
  }, []);

  return (
    <div>
      {film && <h2>Movie title {film.original_title}</h2>}
      <Link to={"cast"}>Cast</Link>
      <Link to={"reviews"}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
