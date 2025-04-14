import { useCallback } from 'react'
import debounce from '../services/debounce'

export default function Header ({ setSearch, search, searchMovies, page }) {
  const debounceGetMovies = useCallback(
    debounce(searchMovies, 300)
    , [])

  const handlerChange = ({ target }) => {
    // verificacion aqui
    if (target.value === ' ') return
    setSearch(target.value)
    debounceGetMovies(target.value, page)
  }

  const handlerSubmit = event => event.preventDefault()

  return (
    <header className='flex bg-amber-950 p-4 justify-between items-center'>
      <h1 className='text-2xl cursor-default text-center'>Buscador de Peliculas</h1>
      <nav>
        <form onSubmit={handlerSubmit} className='flex gap-2  p-2 rounded-md'>
          <input
            onChange={handlerChange}
            value={search}
            name='textSearch'
            className='outline-0 border-b-1 border-white/50 pr-2 hover:border-white transition-border ease-in-out duration-300 text-right'
            type='text'
            placeholder='Search'
          />
          <button
            className='font-bold px-2'
            type='submit'
          />
        </form>
      </nav>
    </header>
  )
}
