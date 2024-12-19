const { jsToHtmlMovieCard } = require("./jsToHtmlMovieCard");
const { tempData } = require("./tempData");
const axios = require('axios');
const { createMovie, resetForm} = require('./createMovie')
const { validateInputs } = require('./validateInputs');

const cards = document.getElementById('cardsContainer');
const createMovieButton = document.getElementById('createMovieButton');
const resetMovieFormButton = document.getElementById('resetMovieFormButton');

if (window.location.pathname === '/front/index.html') {

    async function getMovies() {
        try {
            const response = await axios.get("http://localhost:3000/movies");
            console.log(response);  
            const movies = response.data;
            const arrayHtmlMovies = movies.map(jsToHtmlMovieCard);
            arrayHtmlMovies.forEach((movieHTML) => cards.appendChild(movieHTML));
        } catch (err) {
            console.log(`Hubo un error: ${err.message}`);
            alert("La información de la API no se cargó, se utilizará información fake")
            const arrayHtmlMovies = tempData.map(jsToHtmlMovieCard);
            arrayHtmlMovies.forEach((movieHTML) => cards.appendChild(movieHTML));
        }
    };

    getMovies();

} else {
    if (window.location.pathname === '/front/pages/agregarPeliculas.html') {

        createMovieButton.addEventListener('click', async (event) => {
            event.preventDefault();

            if (validateInputs()) {
                await createMovie();
                alert('Película agregada con éxito');
                resetForm();
            }
        });

        resetMovieFormButton.addEventListener('click', (event) => {
            event.preventDefault();
            resetForm();
        });

    }
};


