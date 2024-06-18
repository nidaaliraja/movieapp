import React from "react";

const MovieData = ({ movieData }) => {
  return (
    <div>
      <h1>{movieData.Title}</h1>
      <p>{movieData.Plot}</p>
      <img src={movieData.Poster} alt={movieData.Title} />
      <p>Year: {movieData.Year}</p>
      <p>Genre: {movieData.Genre}</p>
      <p>Director: {movieData.Director}</p>
      <p>Actors: {movieData.Actors}</p>
      <p>IMDB Rating: {movieData.imdbRating}</p>
    </div>
  );
};

export default MovieData;
