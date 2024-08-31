import MovieRental from './movieRental.js';

let rentalSystem = new MovieRental();

// Add some movies to the inventory
rentalSystem.addMovie('Inception', 'Sci-Fi', 2010, 5, 8.8);
rentalSystem.addMovie('The Godfather', 'Crime', 1972, 3, 9.2);

// Rent a movie
rentalSystem.rentMovie('Inception', 'John Doe');

// Return a movie
rentalSystem.returnMovie('Inception', 'John Doe');

// List all movies
rentalSystem.listAllMovies();
   
// List available movies
rentalSystem.listAvailableMovies();
