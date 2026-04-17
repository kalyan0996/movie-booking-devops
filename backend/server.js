const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/movies", require("./routes/movies"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/booking", require("./routes/booking")); // ✅ REQUIRED

// Server
app.listen(5000, () => console.log("Server running on port 5000"));
