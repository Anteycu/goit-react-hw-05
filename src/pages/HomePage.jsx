import MovieList from "../components/MovieList/MovieList";

const HomePage = () => (
  <div>
    <h2>Trending movies</h2>
    <MovieList moviesData={[]} />
  </div>
);
export default HomePage;
