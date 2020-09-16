import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../helpers/imagesApi";

export default class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchPopularMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        Welcome on Home component
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}movies/${movie.id}`,
                    state: { from: match.location },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
