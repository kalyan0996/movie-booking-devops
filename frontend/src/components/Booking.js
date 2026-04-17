import React, { useState } from "react";

export default function Booking({ movie }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.show_time}</p>

      <div className="seat-grid">
        {[...Array(32)].map((_, i) => {
          const seat = i + 1;
          return (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>

      <h3 style={{textAlign:"center"}}>
        Selected Seats: {selectedSeats.join(", ")}
      </h3>
    </div>
  );
}
