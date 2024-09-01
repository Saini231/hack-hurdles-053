Movie Rental Management System:-
Introduction
The Movie Rental Management System is a backend application designed to manage movie inventory, rentals, and returns. 
It provides essential functionalities such as adding movies, renting and returning movies, listing available movies.

Project Type
Backend

Directory Structure
perl
my-movie-rental-system/
├─ MovieRental.js
├─ utilities.js
├─ movieRental.js
├─ test.js
Features
Add movies to the inventory with details like title, genre, year, copies, and rating.
Rent movies by title, updating the inventory and tracking rentals.
Return movies, update inventory, and calculate late fees.
List available movies in the inventory.
Calculate total revenue from rentals.
List all movies in the inventory.
Design Decisions or Assumptions
The inventory is initially populated with hard-coded data.
Rental fees and late fees are predefined for revenue calculations.
Installation & Getting Started

To set up and run the project, follow these steps:
npm install
node movieRental.js

Technology Stack
Node.js
ES6 Modules
