CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

-- Movies table
CREATE TABLE IF NOT EXISTS movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  poster TEXT
);

-- Clear old data (important for rebuilds)
DELETE FROM movies;

-- Telugu + Pawan Kalyan Movies
INSERT INTO movies (title, poster) VALUES
('Gabbar Singh', 'https://m.media-amazon.com/images/M/MV5BY2Q3YjQyNTUtZWE2Yi00OTVkLTk2Y2QtYzY1NjNjZjA4NDU1XkEyXkFqcGdeQXVyMTU5ODgyOTcx._V1_.jpg'),
('Attarintiki Daredi', 'https://m.media-amazon.com/images/M/MV5BMTU5NTQxNjY3Nl5BMl5BanBnXkFtZTgwNjk1NTUyMDE@._V1_.jpg'),
('Vakeel Saab', 'https://m.media-amazon.com/images/M/MV5BN2Y2OTUxZmQtZTQxZS00NmZlLWIyM2EtNDY5M2FlZmU1NzA2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg'),
('Bheemla Nayak', 'https://m.media-amazon.com/images/M/MV5BNDg2MzQ4MTYtODk4Mi00YmM5LWI4NGEtNmU2ZmY5YzA0Y2U0XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg'),
('RRR', 'https://m.media-amazon.com/images/M/MV5BZjM3ZjQwYTQtZjQyZC00M2M0LTg5NTktYzQ5Y2E0ZmE4YzRlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg');

-- Bookings table (production feature)
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT,
  seat_number VARCHAR(10),
  show_time VARCHAR(20),
  UNIQUE KEY unique_booking (seat_number, show_time)
);
