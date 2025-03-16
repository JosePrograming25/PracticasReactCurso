import Boton from './components/Boton'
import TablaJuego from './components/TablaJuego'
import { useEffect, useState } from 'react'
import OpcionesJuego from './OpcionesJuego'

export default function App (params) {
  const [opcionTablero, setOpcionTablero] = useState('')
  const [tablero, setTablero] = useState(null)
  const handleChange = (event) => setOpcionTablero(event.target.value)

  useEffect(() => {
    const [filas, columnas] = opcionTablero.split('x').map(Number)
    // crea un tablero de filas x columnas con strings vacios
    const tablero = Array.from(
      { length: filas },
      () => Array.from(
        { length: columnas },
        () => ''))
    // cambiamos el tablero cada que hay cambios en la opcionTablero
    setTablero(tablero)
  }, [opcionTablero])

  // cuando se monta el componente, se establece la opcionTablero a
  // 6x7 por defecto
  useEffect(() => {
    setOpcionTablero('6x7')
  }, [])

  return (
    <>
      <h1>Connect 4</h1>
      <TablaJuego tablero={tablero} />
      <Boton>hola</Boton>
      <OpcionesJuego handleChange={handleChange} />
    </>
  )
}
