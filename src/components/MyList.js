import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./MyList.css";

const MyList = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Fetch the movies from local storage and set them to state
    const keys = Object.keys(localStorage);
    // const movies = Object.keys(localStorage).map((key) => {
    //   const movieData = localStorage.getItem(key);
    //   return JSON.parse(movieData);
    // });
    // setMyList(keys);
    // console.log({ keys });
  }, []);

  const handleRemoveFromMyList = (id) => {
    // Remove the movie from local storage and update the state
    localStorage.removeItem(id);
    const updatedMyList = myList.filter((movie) => movie.imdbID !== id);
    setMyList(updatedMyList);
  };

  return (
    <div className="my-list-container">
      <h1>My List</h1>
      <div className="my-movie-list">
        {myList.length === 0 ? (
          <p>Your list is empty.</p>
        ) : (
          myList.map((movie) => (
            <div key={movie.imdbID} className="my-movie-item">
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
              </Link>
              <button onClick={() => handleRemoveFromMyList(movie.imdbID)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyList;
