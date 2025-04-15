import Header from './Components/Header'
import Main from './Components/Main'
import useMovies from './hooks/useMovies'
import useInputSearch from './hooks/useInputSearch'
import { useEffect, useState } from 'react'
import actualizarEstado from './services/actualizarEstado'

function usePage () {
  const [page, setPage] = useState(1)

  return { getPag: page, changePag: actualizarEstado(setPage) }
}

export default function App () {
  const { getMovies, searchMovies } = useMovies()
  const { getPag, changePag } = usePage()
  const { search, changeInputSearch } = useInputSearch(changePag)

  useEffect(() => {
    searchMovies(search, getPag)
  }, [getPag])

  return (
    <div className='text-white min-h-screen bg-amber-800'>
      <Header
        setSearch={changeInputSearch}
        search={search}
        searchMovies={searchMovies}
        page={getPag}
      />
      <Main movies={getMovies} page={getPag} setPage={changePag} />
    </div>
  )
}
