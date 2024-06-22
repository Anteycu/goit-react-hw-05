import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const apiKey = "74deffb283af53f0c578a6d4e99eab77";
// `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}`
// results.map((result) => result.original_title));
export const fetchMoviesWithQuery = (searchQuery, page = 1) => {
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}`
  )
    .then((response) => response.json())
    .then((response) => response.results);
};

export const fetchMoviesDetails = (movieId) => {
  return axios
    .get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`)
    .then((response) => response.data);
};

export const fetchMoviesCast = (movieId) => {
  return axios
    .get(`${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then((response) => response.data.cast);
};

export const fetchMoviesReviews = (movieId) => {
  return axios
    .get(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
    )
    .then((response) => response.data.results);
};

export const fetchPopularMovies = () => {
  return fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((response) => response.results);
};

