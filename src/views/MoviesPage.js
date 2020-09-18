import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesWithQuery } from "../helpers/imagesApi";
import { SearchBar } from "../components/SearchBar/SearchBar";
import getQueryParams from "../helpers/get-query-params";

export default class MoviesPage extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      if (!nextQuery) {
        this.setState({ movies: null });
        return;
      } else this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    if (!query) {
      this.setState({ movies: [] });
    } else {
      fetchMoviesWithQuery(query).then((movies) => this.setState({ movies }));
    }
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        Welcome on MoviesPage component
        <SearchBar onSubmit={this.handleChangeQuery} />
        {movies && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: {
                      from: this.props.location,
                    },
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
