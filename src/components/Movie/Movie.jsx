import s from "./Movie.module.css";

const Movie = ({
  filmDetails: { original_title, poster_path, vote_average, overview, genres },
}) => (
  <div className={s.movieInfo}>
    <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} />
    <div className={s.movieDetails}>
      <h2>{original_title}</h2>
      <section>
        <p>User score: {vote_average}</p>
      </section>
      <section>
        <h3>Overview</h3>
        <p>{overview}</p>
      </section>
      <section>
        <h3>Genres</h3>
        <ul className={s.genres}>
          {genres?.map(({ name, id }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export default Movie;
