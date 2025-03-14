import { useEffect, useState } from 'react'
import Cuadro from './Cuadro'

export default function TablaJuego ({ tamanio = 3, setTurno, turno, setGanador, nuevojuego, ganador }) {
  const [tablaJuego, setTablaJuego] = useState('')

  useEffect(() => {
    if (!tablaJuego) {
      // busca en el localstorage
      const localStoTabla = window.localStorage.getItem('tiktaktoe')
      const localStoTurno = window.localStorage.getItem('turno')
      const localStoGanador = window.localStorage.getItem('ganador')
      console.log(localStoGanador)

      if (localStoTabla && localStoTurno) {
        setTablaJuego(JSON.parse(localStoTabla))
        setTurno(JSON.parse(localStoTurno))
        setGanador(JSON.parse(localStoGanador))
      } else {
        setTablaJuego(Array(tamanio * tamanio).fill(''))
      }
    }
    if (tablaJuego) {
      window.localStorage.setItem('tiktaktoe', JSON.stringify(tablaJuego))
      window.localStorage.setItem('turno', JSON.stringify(turno))
      window.localStorage.setItem('ganador', JSON.stringify(ganador))
      if (!(tablaJuego.find(ele => ele === '') === '') && !ganador) {
        setGanador('Empate')
      }
    }
  }, [tablaJuego])

  useEffect(() => {
    if (nuevojuego) {
      setTablaJuego(Array(tamanio * tamanio).fill(''))
    }
  }, [nuevojuego])

  const CambiarTabla = (cambio, ubicacion) => {
    const temporal = tablaJuego
    temporal[ubicacion] = cambio
    setTablaJuego([...temporal])
  }

  return (
    <div className='grid grid-cols-3  gap-2 w-[600px] h-[600px] bg-slate-300'>
      {
      typeof tablaJuego === 'object' && tablaJuego.map((i, index) => <Cuadro contenido={i} key={index} identificador={index} setTablaJuego={CambiarTabla} setTurno={setTurno} turno={turno} tablaJuego={tablaJuego} setGanador={setGanador} />)
      }
    </div>
  )
}
