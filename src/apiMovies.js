import axios from "axios";

const url = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGRlZmZiMjgzYWY1M2YwYzU3OGE2ZDRlOTllYWI3NyIsIm5iZiI6MTcxOTgzMzk3OC4zMDkwMTQsInN1YiI6IjVmNjBiNzBkM2Y3ZTFkMDAzNDk0ZTI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0CiX3CgokbyNTLEXt39gcCa8FTIVWVCwgq45JMx1MoA",
  },
};

export const trendMoviesReq = timeWindow =>
  axios(`${url}trending/movie/${timeWindow}?language=en-US`, options).then(
    ({ data }) => data.results
  );

export const searchMoviesReq = query =>
  axios(`${url}search/movie?query=${query}`, options).then(
    ({ data }) => data.results
  );

export const movieDetailsReq = id => axios(`${url}movie/${id}`, options);

export const movieCastReq = id =>
  axios(`${url}movie/${id}/credits`, options).then(({ data }) => data.cast);

export const movieReviewsReq = id =>
  axios(`${url}movie/${id}/reviews`, options).then(({ data }) => data.reviews);
