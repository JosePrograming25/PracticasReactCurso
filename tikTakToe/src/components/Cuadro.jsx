import { comprobarCoincidencia } from '../util/hooks'

export default function Tabla ({ contenido, identificador, setTablaJuego, setTurno, turno, tablaJuego, setGanador }) {
  const hayGanador = () => {
    const gana = comprobarCoincidencia(tablaJuego)
    if (gana) setGanador(gana)
  }

  const usoTurno = () => {
    setTablaJuego(turno, identificador)
    setTurno()
    hayGanador()
  }

  const sinContenido = () => {
    if (!contenido) {
      return <span className='text-8xl cursor-pointer opacity-0 hover:opacity-10 transition-all duration-150 ease-linear'>{turno}</span>
    } else return <span className='text-8xl cursor-pointer opacity-100 transition-all duration-150 ease-linear'>{contenido}</span>
  }
  return (
    <div
      className='bg-[#21252B] flex items-center justify-center rounded-sm' onClick={() => { contenido || usoTurno() }}
    >
      {sinContenido()}
    </div>
  )
}
