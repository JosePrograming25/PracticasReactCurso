import useListPage from '../hooks/useListPage'
import ListMovies from './ListMovies'
import ListPag from './ListPag'

export default function Main ({ movies, page, setPage }) {
  const { getListPage, limit } = useListPage({ movies, page, setPage })

  return (
    <main>
      <ListPag listPag={getListPage} page={page} setPage={setPage} limit={limit()} />
      <ListMovies movies={movies} />
      <ListPag listPag={getListPage} page={page} setPage={setPage} limit={limit()} />

    </main>
  )
}
