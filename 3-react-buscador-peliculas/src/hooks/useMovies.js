import { useCallback, useRef, useState } from 'react'
import getMovies from '../services/GetMovies'
import evaluarRespuesta from '../services/evaluarRespuesta'

export default function useMovies () {
  const [movies, setMovies] = useState(null)
  const oldSearch = useRef(null)

  const searchMovies = useCallback((search, page) => {
    if ((oldSearch.current === search || !search) && !page) return
    getMovies(search, page || 1)
      .then(res => {
        setMovies(evaluarRespuesta(res))
        oldSearch.current = search
      })
  }, [])

  return { getMovies: movies, searchMovies }
}
