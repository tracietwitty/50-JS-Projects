const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf1bc15d231d0ece729442692a19d8fb&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=bf1bc15d231d0ece729442692a19d8fb&query="'


const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// GET initial movie list
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieElement = document.createElement('div')
        movieElement.classList.add('.movie')
        movieElement.innerHTML = `
        <div class="movie">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>
        `

        main.appendChild(movieElement)
    })
}

function getClassByRating(vote) {
    if(vote >= 8) {
        return 'green'
    } else if (vote >=5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})

