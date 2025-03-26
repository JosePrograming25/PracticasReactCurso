import Boton from './components/Boton'
import TablaJuego from './components/TablaJuego'
import { useEffect, useState } from 'react'
import OpcionesJuego from './components/OpcionesJuego'

export default function App (params) {
  const [opcionTablero, setOpcionTablero] = useState('')
  const [tablero, setTablero] = useState(null)
  const [jugador, setJugador] = useState('')
  const [ganador, setGanador] = useState(null)
  const cambioTablero = (event) => setOpcionTablero(event.target.value)
  const cambioJugar = () => setJugador([...jugador.reverse()])

  // cuando cambia la opcionTablero, se crea un nuevo tablero
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
    setOpcionTablero('7x8')
    setJugador(['C9546F', '89CA62'])
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-5xl font-extrabold dark:text-white mb-8 mt-2'>Conecta 4</h1>

      {/* se pasa el tablero al componente TablaJuego */}
      <TablaJuego tablero={tablero} />

      {
        // dependiendo de ganador, iniciamos el juego
      (ganador === '') || <OpcionesJuego opcionTablero={opcionTablero} cambioTablero={cambioTablero} jugador={jugador} cambioJugar={cambioJugar} />

      }
      <Boton onClick={() => setGanador('')}>
        {ganador === null ? 'Jugar' : 'Nuevo Juego'}
      </Boton>
    </div>
  )
}
