import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ moviesData }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.movieList}>
        {moviesData.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={location.pathname === "/" ? `movies/${id}` : `${id}`}
              state={location}
              className={s.movieLink}
            >
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
