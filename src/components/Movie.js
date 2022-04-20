import React from "react";
import img from "../img/images.png";
const Movie = ({ data }) => {
  return (
    <div className="Movie">
      <div className="imageContainer">
        {data && data.Poster === "N/A" ? (
          <img src={img} alt=""></img>
        ) : (
          <img src={data.Poster} alt=""></img>
        )}
      </div>
      <p>MovieTitle: {data.Title}</p>
      <p>Year of Release: {data.Year}</p>
      <button title="click for movie details">Details</button>
    </div>
  );
};

export default Movie;
