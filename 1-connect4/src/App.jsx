import Boton from './components/Boton'
import TablaJuego from './components/TablaJuego'
import { useEffect, useState } from 'react'
import OpcionesJuego from './components/OpcionesJuego'
import crearArreglo2D from './hooks/CrearArreglo2D'
import comprobarGanador from './logica/comprobarGanador'
import Ganador from './components/Ganador'

export default function App (params) {
  // estados
  const [opcionTablero, setOpcionTablero] = useState([''])
  const [tablero, setTablero] = useState(null)
  const [jugador, setJugador] = useState('')
  const [ganador, setGanador] = useState(null)

  // funciones de cambio de estado
  const cambioTablero = (event) => setOpcionTablero([event.target.value])
  const cambioJugar = () => setJugador([...jugador.reverse()])
  const cambiarTablero = (i) => setTablero(i)
  const cambiarGanador = (i) => setGanador(i)

  // cuando cambia la opcionTablero, se crea un nuevo tablero
  useEffect(() => {
    const [filas, columnas] = opcionTablero[0].split('x').map(Number)
    const tablero = crearArreglo2D(
      filas,
      columnas,
      (elemento, index) => index === 0 ? null : '')

    setTablero(tablero)
  }, [opcionTablero])

  // añade epacio vacio a seleccionable
  useEffect((arrayPrueba = []) => {
    // casos no ejecutables
    if (!tablero) return undefined
    if (ganador !== '') return undefined

    // añade espacios seleccionables
    for (const fila of tablero) {
      // si ya posee null o estamos en el ultimo peldaño del array
      if (fila.find(item => item === null) === null || fila[fila.length - 1]) {
        arrayPrueba.push(fila)
      } else {
        // si no, busca el el primer elemento vacio
        const coincidencia = fila.lastIndexOf(jugador[1])
        fila[coincidencia + 1] = null
        arrayPrueba.push(fila)
      }
    }
    setTablero([...arrayPrueba])

    // buscar ganador
    const resultado = comprobarGanador(tablero, opcionTablero[0])
    if (resultado) {
      setGanador(resultado)
      setOpcionTablero(['7x8'])
    }
  }, [jugador])
  // cuando se monta el componente, se establece la opcionTablero a

  // Valores por defecto
  useEffect(() => {
    setOpcionTablero(['7x8'])
    setJugador(['rojo', 'verde'])
  }, [])

  // interactividad
  const opcionBoton = () => {
    if (ganador === null || ganador) {
      return setGanador('')
    }
    setGanador(null)
    setOpcionTablero(['7x8'])
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {ganador ? <Ganador ganador={ganador} setGanador={cambiarGanador} /> : undefined}
      <h1 className='text-5xl font-extrabold dark:text-white mb-8 mt-2'>Conecta 4</h1>

      <TablaJuego
        tablero={tablero}
        ganador={ganador}
        jugador={jugador}
        setTablero={cambiarTablero}
        setJugador={cambioJugar}
      />

      {/* dependiendo de ganador iniciamos el juego */
      (ganador === '') || <OpcionesJuego opcionTablero={opcionTablero} cambioTablero={cambioTablero} jugador={jugador} cambioJugar={cambioJugar} tablero={tablero} />
      }
      <Boton onClick={opcionBoton}>
        {ganador === null || ganador ? 'Jugar' : 'Nuevo Juego'}
      </Boton>
    </div>
  )
}
