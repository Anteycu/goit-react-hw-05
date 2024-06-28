import axios from "axios";

const url = "https://api.themoviedb.org/3/";

const options = {
  header: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGRlZmZiMjgzYWY1M2YwYzU3OGE2ZDRlOTllYWI3NyIsIm5iZiI6MTcxOTU3NjA3MC4yMTkxMDMsInN1YiI6IjVmNjBiNzBkM2Y3ZTFkMDAzNDk0ZTI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CB9fcME27tvHlqxA1chPQ2c32bggnQvfn_DOJpst5hQ",
  },
};

const trendMovieReq = timeWindow => {
  return axios.get(
    `${url}trending/movie/${timeWindow}?language=en-US`,
    options
  );
};

export default trendMovieReq;

// apiKey = 74deffb283af53f0c578a6d4e99eab77
