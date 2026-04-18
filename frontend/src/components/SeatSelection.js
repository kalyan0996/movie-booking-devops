import React, { useEffect, useState } from "react";
import API from "../api/api";

const seats = Array.from({ length: 30 }, (_, i) => `S${i + 1}`);

function SeatSelection({ movieId, selectedSeats, setSelectedSeats }) {
  const [booked, setBooked] = useState([]);
  const showTime = "6PM";

  useEffect(() => {
    API.get(`/booked/${showTime}`)
      .then(res => setBooked(res.data.map(s => s.seat_number)))
      .catch(err => console.error(err));
  }, []);

  const toggleSeat = (seat) => {
    if (booked.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h2>Select Seat</h2>

      <div className="screen">SCREEN</div>

      <div className="seats">
        {seats.map((seat, index) => {
          let type = "regular";
          if (index < 6) type = "vip";
          if (index > 20) type = "economy";

          let className = `seat ${type}`;

          if (booked.includes(seat)) className += " booked";
          else if (selectedSeats.includes(seat)) className += " selected";

          return (
            <div
              key={seat}
              className={className}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeatSelection;
