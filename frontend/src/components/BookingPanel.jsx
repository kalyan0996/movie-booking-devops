import React from "react";

function BookingPanel() {
  return (
    <div className="panel">
      <h3>Order Summary</h3>

      <p>Movie: Avengers</p>
      <p>Seats: S1, S2</p>
      <p>Price: ₹200</p>

      <button className="confirm">Confirm Booking</button>
    </div>
  );
}

export default BookingPanel;
