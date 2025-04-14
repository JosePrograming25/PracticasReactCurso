import { useEffect, useState } from 'react'
import actualizarEstado from '../services/actualizarEstado'

export default function useInputSearch (setPage) {
  const [search, setSearch] = useState('')
  const [errorSearch, setErrorSearch] = useState('')

  useEffect(() => {
    // verificaciones aqui ejemplo (que no se puedan buscar numeros)
    setPage(1)
  }, [search])
  return { search, changeInputSearch: actualizarEstado(setSearch) }
}
