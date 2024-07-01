import { Link } from "react-router-dom";
const MovieList = ({ moviesData = [] }) => (
  <div>
    <ul>
      {moviesData.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MovieList;
