const Movie = require("../models/Movie")

const getMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        throw error;
    };
};

const createMovie = async (movieData) => {
    try {
        const movieCreated = await Movie.create(movieData)
        return movieCreated;
    } catch (error) {
        console.error("Error al crear la película:", error);
        throw error;
    };
};

module.exports = { getMovies, createMovie };