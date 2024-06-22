import React, { Component } from "react";
import { fetchMoviesReviews } from "../helpers/imagesApi";
import { Notification } from "../components/Notification/Notification";

export default class Cast extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetchMoviesReviews(this.props.match.params.movieId).then((reviews) =>
      this.setState({ reviews })
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews > 0 ? (
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
        ) : (
          <Notification
            message={`Sorry, but we haven't ${Object.keys(this.state)}`}
          />
        )}
      </div>
    );
  }
}
