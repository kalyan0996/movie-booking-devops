const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Save booking
router.post("/", (req, res) => {
  const { movie_id, seats, total_price } = req.body;

  const query =
    "INSERT INTO bookings (movie_id, seats, total_price) VALUES (?, ?, ?)";

  db.query(query, [movie_id, seats.join(","), total_price], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    res.json({
      message: "Booking successful",
      bookingId: result.insertId
    });
  });
});

module.exports = router;
