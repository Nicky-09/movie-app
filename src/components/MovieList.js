import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    const apiKey = "7a054141"; // Replace 'YOUR_API_KEY' with your actual API key
    const response = await axios.get(
      `https://www.omdbapi.com/?s=batman&page=${currentPage}&apikey=${apiKey}`
    );

    setMovies((prevMovies) => [...prevMovies, ...(response.data.Search || [])]);
    setIsLoading(false);
  };

  // Function to handle page change
  const handlePageChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="list-container">
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        )}
      </div>

      {/* Pagination */}
      {movies.length > 0 && (
        <div className="pagination">
          <button onClick={handlePageChange}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default MovieList;
