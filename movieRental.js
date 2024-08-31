import {welcomeMessage} from './utilities.js';
// Display the welcome message
welcomeMessage();

class MovieRental {
    constructor() {
        this.movies = []; // Array to store all movies
        this.rentedMovies = []; // Array to store rented movies
    }
    // Method to add a movie to the inventor
    
    addMovie(title, genre, year, copies, rating) {
        this.movies.push({ title, genre, year, copies, rating });
        console.log(`Movie added: ${title}`);
    }

    // Method to rent a movie by title
    rentMovie(title) {
        const movie = this.movies.find(movie => movie.title === title && movie.copies > 0);
        if (movie) {
            movie.copies--; // Decrement the available copies
            this.rentedMovies.push({title});
            console.log(`Movie rented: ${title}`);
        } else {
            console.log(`Movie not available: ${title}`);
        }
    }

    // Method to return a movie by title
    returnMovie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.copies++; // Increment the available copies
            console.log(`Movie returned: ${title}`);
        } else {
            console.log(`Movie not found: ${title}`);
        }
    }

    // Method to list all movies in the inventory
    listAllMovies() {
        console.log("All Movies in Inventory:");
        this.movies.forEach(movie => console.log(movie));
    }

    // Method to list available movies (with copies > 0)
    listAvailableMovies() {
        const availableMovies = this.movies.filter(movie => movie.copies > 0);
        console.log("Available Movies:");
        availableMovies.forEach(movie => console.log(movie));
    }
}

export default  MovieRental;
