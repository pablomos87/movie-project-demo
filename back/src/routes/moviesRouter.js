const { Router } = require("express");
const { getMoviesController, createMovieController } = require("../controllers/moviesController");
const { validateMoviesInfo } = require("../middlewares/validateMoviesInfo")

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/", validateMoviesInfo,  createMovieController);

module.exports = { moviesRouter };