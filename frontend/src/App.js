import "./styles.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import SeatSelection from "./components/SeatSelection";
import BookingPanel from "./components/BookingPanel";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="app">

      {/* LEFT */}
      <div className="sidebar">
        <h2>PVR Cinema</h2>
        <button className="active">Book Show</button>
        <button>History</button>
      </div>

      {/* CENTER */}
      <div className="main">
        <MovieList onSelect={setSelectedMovie} />
        <SeatSelection
          movieId={selectedMovie?.id}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      </div>

      {/* RIGHT */}
      <div className="right-panel">
        <BookingPanel
          movie={selectedMovie}
          selectedSeats={selectedSeats}
        />
      </div>

    </div>
  );
}

export default App;
