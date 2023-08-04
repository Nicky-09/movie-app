import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="movie-title">Movie App</span>
        </Link>
      </div>
      <div className="wishlist-button">
        <Link to="/mylist">My Watchlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
