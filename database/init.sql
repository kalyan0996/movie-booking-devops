CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

-- Movies table
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  poster TEXT,
  show_time VARCHAR(50) NOT NULL
);

-- Insert sample movies
INSERT INTO movies (title, poster, show_time) VALUES
('Inception', 'https://via.placeholder.com/300x400', '10:00 AM'),
('Interstellar', 'https://via.placeholder.com/300x400', '2:00 PM');

-- Bookings table
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT NOT NULL,
  seats VARCHAR(255) NOT NULL,
  total_price INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  -- Foreign key (VERY IMPORTANT)
  FOREIGN KEY (movie_id) REFERENCES movies(id)
    ON DELETE CASCADE
);
