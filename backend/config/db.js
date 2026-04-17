const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db",           // Docker container name
  user: "root",
  password: "root",
  database: "movies_db"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("DB Connected");
  }
});

module.exports = db;
