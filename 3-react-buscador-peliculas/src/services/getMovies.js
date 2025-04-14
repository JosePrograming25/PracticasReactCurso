const GETMOVIES = 'https://www.omdbapi.com/?apikey=6fc42107&s='

export default function getMovies (busqueda, page = 1) {
  return fetch(`${GETMOVIES}${busqueda}&page=${page}`)
    .then(response => response.json())
    .then(res => res)
}
