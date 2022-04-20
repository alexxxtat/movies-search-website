import React from "react";
const Movie = ({ data }) => {
  return (
    <div className="Movie">
      <div className="imageContainer">
        <img src={data.Poster} alt=""></img>
      </div>
      <p>MovieTitle: {data.Title}</p>
      <p>Year of Release: {data.Year}</p>
      <button>Download Poster</button>
    </div>
  );
};

export default Movie;
