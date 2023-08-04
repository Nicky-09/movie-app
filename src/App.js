import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import MyList from "./components/MyList";
import MyListMovies from "./components/MyListMovies";
import Navbar from "./components/Navbar";

const App = () => {
  // const match = useRouteMatch();
  // console.log("Match props:", match);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
            <Route path="/mylist" element={<MyListMovies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
