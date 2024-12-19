
function jsToHtmlMovieCard(movie) {

    const movieCard = document.createElement('div');
    const title = document.createElement('h3');
    const cardBody = document.createElement('div');
    const poster = document.createElement('img');
    const director = document.createElement('p');
    const year = document.createElement('p');
    
    poster.src = movie.poster;
    poster.classList.add('card-img-top-movies', 'm-1', 'custom-width-img-cards', 'h-auto', 'img-fluid', 'pb-3')
    poster.alt = movie.title;
    cardBody.classList.add('card-body-movies', 'custom-font-size-1')
    title.textContent = movie.title;
    title.classList.add('card-title-movies');
    director.textContent = movie.director;
    director.classList.add('card-text-movies');
    year.textContent = movie.year;
    year.classList.add('card-text-movies');
    movieCard.classList.add('card-movies', 'col-md-4', 'col-sm-6', 'border-0', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'custom-background-1', 'mb-5');
    
    movieCard.appendChild(poster);
    movieCard.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(director);
    cardBody.appendChild(year);

    return movieCard;
};

module.exports = {
    jsToHtmlMovieCard
};