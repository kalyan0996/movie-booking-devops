const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", require("./routes/movies"));
app.use("/api/admin", require("./routes/admin"));

app.listen(5000, () => console.log("Server running"));
