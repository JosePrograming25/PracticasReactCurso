import obtenerHecho from '../service/ObtenerHecho'
import { useEffect, useState } from 'react'

export default function useHecho () {
  const [hecho, setHecho] = useState('')

  const ActualizarHecho = () => {
    obtenerHecho()
      .then(res => setHecho(res))
  }

  useEffect(ActualizarHecho, [])

  return { hecho, ActualizarHecho }
}
