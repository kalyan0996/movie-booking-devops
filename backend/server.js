const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // promise pool

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* =========================
   GET MOVIES
========================= */
app.get("/api/movies", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM movies");
    res.json(rows);
  } catch (err) {
    console.error("DB ERROR:", err.message);
    res.status(500).send("DB error");
  }
});

/* =========================
   GET BOOKED SEATS
========================= */
app.get("/api/booked/:time", async (req, res) => {
  const time = req.params.time;

  try {
    const [rows] = await db.query(
      "SELECT seat_number FROM bookings WHERE show_time=?",
      [time]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

/* =========================
   BOOK SEAT
========================= */
app.post("/api/book", async (req, res) => {
  const { movie_id, seat_number, show_time } = req.body;

  try {
    // check existing booking
    const [existing] = await db.query(
      "SELECT * FROM bookings WHERE seat_number=? AND show_time=?",
      [seat_number, show_time]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    // insert booking
    await db.query(
      "INSERT INTO bookings (movie_id, seat_number, show_time) VALUES (?, ?, ?)",
      [movie_id, seat_number, show_time]
    );

    res.json({ message: "Booking successful" });

  } catch (err) {
    console.error("BOOK ERROR:", err.message);
    res.status(500).send("DB error");
  }
});

/* =========================
   START SERVER
========================= */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
