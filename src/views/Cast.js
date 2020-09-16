import React, { Component } from "react";
import { fetchMoviesCast } from "../helpers/imagesApi";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    fetchMoviesCast(this.props.match.params.movieId).then((cast) =>
      this.setState({ cast })
    );
    // fetchMoviesCast(this.props.match.params.movieId).then(console.log);
  }

  castImgUrl = (imgPath) => {
    if (imgPath) {
      return `https://image.tmdb.org/t/p/w400${imgPath}`;
    }
    console.log("Still havent imgPath");
  };

  render() {
    const { cast } = this.state;
    console.log(cast);
    return (
      <div>
        {cast.length > 0 && (
          <>
            <p>Welcome on Cast component</p>
            <ul>
              {cast.map((castItem) => (
                <li key={castItem.id}>
                  <img
                    src={`${this.castImgUrl(castItem.profile_path)}`}
                    alt={cast.original_title}
                  />
                  <p>{castItem.character}</p>
                  <p>{castItem.name}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
