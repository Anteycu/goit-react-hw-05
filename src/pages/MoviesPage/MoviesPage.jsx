import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMoviesReq } from "../../apiMovies";
import Notifications from "../../components/Notifications/Notifications";
import SearchForm from "../../components/SearchForm/SearchForm";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (searchQuery === "") return;

    const fetchSearchMovies = async queryReq => {
      try {
        const movies = await searchMoviesReq(queryReq);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSearchMovies(searchQuery);
  }, [searchQuery]);

  const updateSearchParam = query => {
    const nextParam = query !== "" ? { query } : {};
    setSearchParams(nextParam);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    updateSearchParam(form.elements.title.value);
    form.reset();
  };

  return (
    <div className="container">
      <SearchForm onSubmit={handleSubmit} />
      <h2 className={s.title}>Films you searched for:</h2>
      {error ? (
        <Notifications type="error" msg={error} />
      ) : (
        <MovieList moviesData={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
