const { getMovies,  createMovie } = require("../services/moviesService");


const getMoviesController = async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovieController = async (req, res) => {
  const movieData = req.body;
  try {
    await createMovie(movieData);
    res.status(201).json({
      message: "Película creada con éxito",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMoviesController, createMovieController };

