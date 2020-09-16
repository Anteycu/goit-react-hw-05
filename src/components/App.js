import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../views/Home";
import MoviesPage from "../views/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import routes from "../routes";
import { HeaderApp } from "./HeaderApp";

export class App extends Component {
  render() {
    return (
      <>
        <HeaderApp />

        <hr></hr>

        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.moviesPage} exact component={MoviesPage} />
          <Route path={routes.moviesDetailsPage} component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
