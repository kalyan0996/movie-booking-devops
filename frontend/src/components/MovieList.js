import React, { useEffect, useState } from "react";
import { API } from "../api";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get("/movies").then(res => setMovies(res.data));
  }, []);

  return (
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
      {movies.map(m => (
        <div key={m.id}>
          <img src={m.poster} width="150" />
          <h3>{m.title}</h3>
          <p>{m.show_time}</p>
        </div>
      ))}
    </div>
  );
}
