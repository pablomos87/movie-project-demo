const axios = require('axios');

function resetForm() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    if (input.type !== "checkbox") {
      input.value = "";
    }
    if (input.type === "checkbox") {
      input.checked = false;
    }
  });
}

async function createMovie() {
  try {

    const genreCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedGenres = [...genreCheckboxes].map(checkbox => checkbox.value.trim());;
    const durationHours = document.getElementById("inputDurationHours").value.trim();
    const durationMinutes = document.getElementById("inputDurationMinutes").value.trim();
    const duration = `${durationHours}h ${durationMinutes}min`;

    const newMovie = {
      title: document.getElementById('inputTitle').value.trim(),
      year: parseInt(document.getElementById('inputYear').value, 10),
      director: document.getElementById('inputDirector').value.trim(),
      duration: duration,
      genre: selectedGenres,
      rate: parseFloat(document.getElementById('inputRate').value),
      poster: document.getElementById('inputPoster').value.trim(),
    };

    await axios.post('http://localhost:3000/movies', newMovie);
  } catch (err) {
    console.log(`Hubo un error: ${err.message}`);
  }
}


module.exports = { createMovie, resetForm}