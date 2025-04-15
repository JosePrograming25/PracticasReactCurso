import ListMovies from './ListMovies'
import ListPag from './ListPag'

export default function Main ({ movies, page, setPage }) {
  const limit = () => movies ? Math.ceil(movies.total / 10) : undefined
  return (
    <main>
      <ListPag page={page} setPage={setPage} limit={limit()} />
      <ListMovies movies={movies} />
      <ListPag page={page} setPage={setPage} limit={limit()} />

    </main>
  )
}
