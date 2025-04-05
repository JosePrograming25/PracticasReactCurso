import { useState, useEffect } from 'react'
import cortarPalabras from '../service/cortarPalabras'

const URL_IMAGEN_GATOS_PALABRA = 'https://cataas.com/cat/says/'

export default function useImgGatHecho ({ hecho }) {
  const [imagenPalabra, setImagenPalabra] = useState(undefined)

  const Cambiohecho = () => {
    if (!hecho) return undefined
    hecho = cortarPalabras(hecho, 3, '%20')
    hecho = URL_IMAGEN_GATOS_PALABRA + hecho
    setImagenPalabra(hecho)
  }
  useEffect(Cambiohecho, [hecho])

  return { urlImagen: imagenPalabra }
}
