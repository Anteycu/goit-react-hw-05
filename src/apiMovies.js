import axios from "axios";

const url = "https://api.themoviedb.org/3/";

const options = {
  header: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGRlZmZiMjgzYWY1M2YwYzU3OGE2ZDRlOTllYWI3NyIsIm5iZiI6MTcxOTU3NjA3MC4yMTkxMDMsInN1YiI6IjVmNjBiNzBkM2Y3ZTFkMDAzNDk0ZTI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CB9fcME27tvHlqxA1chPQ2c32bggnQvfn_DOJpst5hQ",
  },
};

export const trendMoviesReq = timeWindow =>
  axios(`${url}trending/movie/${timeWindow}?language=en-US`, options).then(
    ({ result }) => result
  );

export const searchMoviesReq = query =>
  axios(`${url}search/movie?query=${query}`, options).then(
    ({ result }) => result
  );

export const movieDetailsReq = id => axios(`${url}movie/${id}`, options);

export const movieCastReq = id =>
  axios(`${url}movie/${id}/cast`, options).then(({ cast }) => cast);

export const movieReviewsReq = id =>
  axios(`${url}movie/${id}/reviews`, options).then(({ reviews }) => reviews);
