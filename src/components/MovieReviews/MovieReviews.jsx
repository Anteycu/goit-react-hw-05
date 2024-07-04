import { useState, useEffect } from "react";
import { movieReviewsReq } from "../../apiMovies";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await movieReviewsReq(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Something about movie reviews</h2>
      {error ? (
        <p>Something goes wrong: {error}</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
