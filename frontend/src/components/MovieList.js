import React, { useEffect, useState } from "react";
import API from "../api/api";

function MovieList({ onSelect }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get("/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Movies</h2>

      {movies.map(movie => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => onSelect(movie)}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/100x140?text=No+Image")
            }
          />

          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>⭐ 8.5 • Action • 2h 30m</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
