import React from "react";

function BookingPanel({ movie }) {
  return (
    <div className="panel">
      <h3>Order Summary</h3>

      <p>Movie: {movie ? movie.title : "None"}</p>
      <p>Seats: None</p>
      <p>Price: ₹0</p>

      <button className="confirm">Confirm Booking</button>
    </div>
  );
}

export default BookingPanel;
