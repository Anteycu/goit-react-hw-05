import { useEffect, useState } from "react";
import { movieCastReq } from "../../apiMovies";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await movieCastReq(movieId);
        setActors(cast);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2 className={s.sectionDescr}>Information about movie cast</h2>
      {error ? (
        <p>Something goes wrong: {error}</p>
      ) : (
        <ul className={s.actorsList}>
          {actors.map(({ character, name, profile_path, credit_id }) => (
            <li key={credit_id} className={s.actorItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "/src/defaultAvatar.jpg"
                }
                className={s.avatar}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
