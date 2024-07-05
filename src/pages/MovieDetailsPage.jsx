import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { movieDetailsReq } from "../apiMovies";
import Movie from "../components/Movie/Movie";
import Notifications from "../components/Notifications/Notifications";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocation = location.state ?? "/movies";

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
      <Link to={backLinkLocation}>Go back</Link>
      {error ? (
        <Notifications type="error" msg={error} />
      ) : (
        <Movie filmDetails={film} />
      )}

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={"cast"} state={backLinkLocation}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={"reviews"} state={backLinkLocation}>
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
