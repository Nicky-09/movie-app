import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/detail/${movie.imdbID}`} key={movie.imdbID}>
        <div className="card">
          <img src={movie.Poster} alt={movie.Title} width={170} height={200} />
          <span>{movie.Title}</span>
          <span>Type: {movie.Type}</span>
          <span>Year: {movie.Year}</span>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
