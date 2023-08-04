import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./MyList.css";

const MyList = () => {
  const [myList, setMyList] = useState([]);

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
