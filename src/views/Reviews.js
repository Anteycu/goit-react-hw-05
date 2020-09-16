import React, { Component } from "react";
import { fetchMoviesReviews } from "../helpers/imagesApi";

export default class Cast extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetchMoviesReviews(this.props.match.params.movieId).then((reviews) =>
      this.setState({ reviews })
    );
    // fetchMoviesReviews(this.props.match.params.movieId).then(console.log);
  }

  render() {
    const { reviews } = this.state;
    // const baseUrl = "https://image.tmdb.org/t/p/w400";
    console.log(reviews);
    return (
      <div>
        {reviews && (
          <>
            <h2>Welcome on Review component</h2>
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <p>{review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
