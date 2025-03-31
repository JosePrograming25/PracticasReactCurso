import Circulo from './Circulo'

export default function ObjetoTablero ({ i, ganador, jugador, setTablero, objetoTabla, tablero, setJugador }) {
  const [columna, elemento] = i
  const validarSeleccion = () => ganador === '' && objetoTabla === null
  // tamanio - elemento - tamanio * -1
  const estilo = () => {
    if (validarSeleccion()) {
      // por alguna razon no funciona colocandole simplemente en hover:${jugador[0]} con comillas invertidas
      const colorEdith = jugador === 'rojo'
        ? 'text-objeto-predeterminado hover:text-jugador-rojo cursor-pointer transition duration-200 ease-in-out transtition-colors hover:opacity-80'
        : 'text-objeto-predeterminado hover:text-jugador-verde cursor-pointer transition duration-200 ease-in-out transtition-colors hover:opacity-80'
      return colorEdith
    }
    if (objetoTabla === 'rojo') return 'text-jugador-rojo'
    if (objetoTabla === 'verde') return 'text-jugador-verde'
    return 'text-objeto-predeterminado'
  }

  const handlerClick = () => {
    if (validarSeleccion()) {
      tablero[columna][elemento] = jugador
      setTablero([...tablero])
      setJugador()
    }
  }

  return (
    <div
      onClick={handlerClick} className='w-15 h-15 flex items-center justify-center p-1'
    >
      <Circulo className={estilo()} valido={validarSeleccion()} />
    </div>
  )
}
