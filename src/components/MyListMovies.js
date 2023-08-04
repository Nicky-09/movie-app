import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyList.css"; // Import the CSS file

const MyListMovies = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Fetch the movies from local storage and set them to state
    const keys = Object.keys(localStorage);
    const movies = keys.map((key) => {
      const movieData = localStorage.getItem(key);
      return JSON.parse(movieData);
    });
    const myListMovies = movies.filter((item) => item.Title);
    setMyList(myListMovies);
  }, []);

  return (
    <div className="my-list-container">
      <h1 className="my-list-title">My List Movies</h1>
      {myList.length === 0 ? (
        <p className="empty-message">Your list is empty.</p>
      ) : (
        <div className="movies-flex">
          {myList.map((movie) => (
            <div key={movie.imdbID} className="movie-card1">
              <Link to={`/detail/${movie.imdbID}`} key={movie.imdbID}>
                <div className="card">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie-poster"
                    width={170}
                    height={200}
                  />
                  <span className="movie-type">{movie.Title}</span>
                  <span className="movie-type">{movie.Type}</span>
                  <span className="movie-type">{movie.Year}</span>
                </div>
              </Link>
            </div>

            // <div className="movie-card">
            //   <Link to={`/detail/${movie.imdbID}`} key={movie.imdbID}>
            //     <div className="card">
            //       <img
            //         src={movie.Poster}
            //         alt={movie.Title}
            //         width={170}
            //         height={200}
            //       />
            //       <span>{movie.Title}</span>
            //       <span>Type: {movie.Type}</span>
            //       <span>Year: {movie.Year}</span>
            //     </div>
            //   </Link>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListMovies;
