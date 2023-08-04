import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import { MenuShimmer } from "./Shimmer";

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [isInMyList, setIsInMyList] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const apiKey = "7a054141"; // Replace 'YOUR_API_KEY' with your actual API key
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
      );
      console.log("called1");
      setMovie(response.data || null);
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    // Check if the movie is already in My List
    const isInList = localStorage.getItem(id) === "true";
    console.log("called2");
    setIsInMyList(isInList);
  }, [id]);

  const handleAddToMyList = () => {
    if (!isInMyList) {
      // Save the movie data to local storage
      localStorage.setItem(id, JSON.stringify(movie));
      setIsInMyList(true);
    }
  };

  const handleRemoveFromMyList = () => {
    if (isInMyList) {
      // Remove the movie data from local storage
      localStorage.removeItem(id);
      setIsInMyList(false);
    }
  };

  if (!movie) {
    return (
      <div>
        <MenuShimmer />
      </div>
    );
  }

  return (
    <div>
      <div className="movie-detail">
        <div className="movie-heading">
          <h2>{movie.Title}</h2>
          <span className="year">{movie.Year}</span>
          <span>IMDb: {movie.imdbRating}</span>
        </div>
        <div className="movie-description">
          <div>
            <img src={movie.Poster} alt={movie.Title} />
            <br />
            <p className="tag">{movie.Genre}</p>
            <br />
            {isInMyList ? (
              <button onClick={handleRemoveFromMyList}> Remove for List</button>
            ) : (
              <button onClick={handleAddToMyList}> + WatchList</button>
            )}
          </div>
          <div className="movie-description">
            <div className="movie-details">
              <h3 className="detail-heading">Plot</h3>
              <p className="detail-data">{movie.Plot}</p>
              <hr />
              <h3 className="detail-heading">Director</h3>
              <p className="detail-data">{movie.Director}</p>
              <hr />
              <h3 className="detail-heading">Actors</h3>
              <p className="detail-data">{movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
