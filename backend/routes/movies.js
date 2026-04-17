const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    res.json(result);
  });
});

module.exports = router;
