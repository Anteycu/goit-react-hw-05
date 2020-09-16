import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { fetchMoviesDetails } from "../helpers/imagesApi";
import Cast from "./Cast";
import Reviews from "./Reviews";
// import { NavigationMovieDetails } from "../components/Navigation/Navigation";
import routes from "../routes";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    fetchMoviesDetails(this.props.match.params.movieId).then((movie) =>
      this.setState({ movie })
    );
    // fetchMoviesDetails(this.props.match.params.movieId).then(console.log);
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    // if (state.from.pathname === "путь на отрисованный фильм") {
    //   return this.props.history.push({pathname:"/movies", search:"последний запрос"});
    // }

    this.props.history.push(routes.home);
  };

  movieImgUrl = () =>
    `https://image.tmdb.org/t/p/w400${this.state.movie.poster_path}`;

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <div>
        <p>Welcome on MovieDetailsPage component</p>
        <button onClick={this.handleGoBack} type="button">
          Back to list
        </button>
        <hr></hr>
        {movie && (
          <>
            <img src={`${this.movieImgUrl()}`} alt={movie.original_title} />
            <h1>{movie.original_title}</h1>
            <ul>
              <li>
                <NavLink
                  exact
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: this.props.location },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: this.props.location },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
