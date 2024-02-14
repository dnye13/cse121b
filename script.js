function getRecommendations() {
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=&type=movie&y=${year}&plot=short&r=json`)
        .then(response => response.json())
        .then(data => {
            const moviesContainer = document.getElementById('movies');
            moviesContainer.innerHTML = '';

            if (data.Response === "True") {
                const movies = data.Search;
                movies.forEach(movie => {
                    if (genre.toLowerCase() === 'all' || movie.Genre.toLowerCase().includes(genre.toLowerCase())) {
                        const movieCard = document.createElement('div');
                        movieCard.classList.add('movie-card');
                        movieCard.innerHTML = `
                            <img src="${movie.Poster}" alt="${movie.Title}">
                            <h3>${movie.Title}</h3>
                            <p>${movie.Year}</p>
                            <p>${movie.Genre}</p>
                        `;
                        moviesContainer.appendChild(movieCard);
                    }
                });
            } else {
                moviesContainer.innerHTML = '<p>No movies found</p>';
            }
        })
        .catch(error => console.log('Error fetching data:', error));
}

Replace 'YOUR_API_KEY' in the JavaScript code with your actual OMDB API key.