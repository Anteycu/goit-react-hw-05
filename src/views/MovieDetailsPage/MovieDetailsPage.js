import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { fetchMoviesDetails } from "../../helpers/imagesApi";
import routes from "../../routes";
import "./MovieDetailsPage.css";

const AsyncCast = lazy(() =>
  import("../Cast" /* webpackChunkName: "cast-section" */)
);
const AsyncReviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "review-section" */)
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    fetchMoviesDetails(this.props.match.params.movieId).then((movie) =>
      this.setState({ movie })
    );
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
        <button className={"Button"} onClick={this.handleGoBack} type="button">
          Back to list
        </button>
        <hr></hr>
        {movie && (
          <div className={"Container"}>
            <img
              className={"ImageItem-image"}
              src={`${this.movieImgUrl()}`}
              alt={movie.original_title}
            />
            <div className={"Info"}>
              <h1 className={"Title"}>{movie.original_title}</h1>
              <h2 className={"Overview"}>Overview</h2>
              <p className={"Overview-item"}>{movie.overview}</p>
              <h2 className={"Date "}>Release date</h2>
              <p className={"Date-item "}>{movie.release_date}</p>
              <h2 className={"Rating "}>Rating</h2>
              <p className={"Rating-item "}>{movie.vote_average}</p>
            </div>
            <ul className={"Nav-list"}>
              <li className={"Nav-item"}>
                <NavLink
                  className={"Button"}
                  exact
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: this.props.location },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li className={"Nav-item"}>
                <NavLink
                  className={"Button"}
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: this.props.location },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path={`${match.path}/cast`} component={AsyncCast} />
            <Route path={`${match.path}/reviews`} component={AsyncReviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
