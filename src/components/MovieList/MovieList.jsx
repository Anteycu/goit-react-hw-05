const MovieList = ({ moviesData = [] }) => (
  <div>
    <ul>
      {moviesData.map((movie, index) => (
        <li key={index}>
          <img src="#" />
          <p>description</p>
        </li>
      ))}
    </ul>
  </div>
);

export default MovieList;
