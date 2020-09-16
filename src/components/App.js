import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import { HeaderApp } from "./HeaderApp";

const AsyncHome = lazy(() =>
  import("../views/Home" /* webpackChunkName: "home-section" */)
);
const AsyncMoviesPage = lazy(() =>
  import("../views/MoviesPage" /* webpackChunkName: "moviesPage-section" */)
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movieDetailsPage-section" */
  )
);

export class App extends Component {
  render() {
    return (
      <>
        <HeaderApp />
        <hr></hr>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path={routes.home} exact component={AsyncHome} />
            <Route path={routes.moviesPage} exact component={AsyncMoviesPage} />
            <Route
              path={routes.moviesDetailsPage}
              component={AsyncMovieDetailsPage}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  }
}
