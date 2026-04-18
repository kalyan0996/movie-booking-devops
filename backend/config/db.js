const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "password",
  database: "movies_db",
  waitForConnections: true,
  connectionLimit: 10,
});

// Use promise wrapper (important)
module.exports = pool.promise();
