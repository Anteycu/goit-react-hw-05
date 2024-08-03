import s from "./Movie.module.css";

const Movie = ({
  filmDetails: { original_title, poster_path, vote_average, overview, genres },
}) => (
  <div className={s}>
    <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} />
    <h2>{original_title}</h2>
    <p>{vote_average}</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h3>Genres</h3>
    <ul>
      {genres?.map(({ name, id }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Movie;
