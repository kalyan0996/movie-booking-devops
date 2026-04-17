import React, { useEffect, useState } from "react";
import axios from "axios";
import Booking from "./Booking";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  // 👉 If user clicks "Book", show Booking screen
  if (selectedMovie) {
    return <Booking movie={selectedMovie} />;
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={movie.poster}
            alt={movie.title}
            className="movie-poster"
          />

          <div className="movie-info">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-time">{movie.show_time}</div>

            <button
              className="book-btn"
              onClick={() => setSelectedMovie(movie)}
            >
              Book Tickets
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
