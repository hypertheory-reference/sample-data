"use strict";

const fs = require("fs");

let moviesData = fs.readFileSync("./demo/movies.json", "utf8");

let movies = JSON.parse(moviesData);

let filteredMovies = movies.filter(
  (m) => m.year >= 2010 && m.cast && m.cast.length > 0
);

console.log(`Total movies: ${filteredMovies.length}`);
fs.writeFileSync("./demo/filtered-movies.json", JSON.stringify(filteredMovies));
