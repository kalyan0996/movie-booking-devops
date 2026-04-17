import React from "react";
import MovieList from "./components/MovieList";
import "./styles.css";

function App() {
  return (
    <>
      <div className="header">Movie Booking</div>
      <div className="container">
        <MovieList />
      </div>
    </>
  );
}

export default App;
