CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  poster TEXT,
  show_time VARCHAR(50)
);

INSERT INTO movies (title, poster, show_time) VALUES
('Inception', 'https://via.placeholder.com/150', '10:00 AM'),
('Interstellar', 'https://via.placeholder.com/150', '2:00 PM');
