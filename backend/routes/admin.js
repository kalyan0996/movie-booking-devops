const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN = { username: "admin", password: "admin123" };

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    const token = jwt.sign({ username }, "secret");
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

module.exports = router;
