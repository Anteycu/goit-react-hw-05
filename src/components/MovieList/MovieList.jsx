import { Link, useLocation } from "react-router-dom";

const MovieList = ({ moviesData }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {moviesData.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={location.pathname === "/" ? `movies/${id}` : `${id}`}
              state={location}
            >
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
