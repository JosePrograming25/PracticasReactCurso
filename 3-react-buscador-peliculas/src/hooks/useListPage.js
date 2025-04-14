import { useRef, useState, useEffect } from 'react'
import newArray from '../services/newArray'

export default function useListPage ({ movies, page, setPage }) {
  const [listPag, setListPag] = useState([])
  const saveList = useRef(null)
  const limit = () => movies ? movies.total : 1

  useEffect(() => {
    if (!movies) { // si no hay movies reinicia los valores
      saveList.current = null
      setListPag([])
      setPage(1)
      return
    }
    if (saveList.current !== page) {
      setListPag(newArray(Math.ceil(movies.total / 10), page, listPag))
      saveList.current = page
    }
  }, [movies, page])

  return { getListPage: listPag, limit }
}
