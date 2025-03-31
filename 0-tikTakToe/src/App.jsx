import React, { useState } from 'react'
import TablaJuego from './components/TablaJuego'
import Turno from './components/Turno'
import Ganador from './components/Ganador'
import { circulo } from './util/constantes'
import Button from './components/Button'

const App = () => {
  const [turno, setTurno] = useState(circulo)
  const [ganador, setGanador] = useState('')
  const [nuevoJuego, setNuevoJueggo] = useState('')
  const esGanador = gana => setGanador(gana)
  const nuevoJueg = prop => setNuevoJueggo(prop)

  const cambiarTurno = (prop) => {
    if (prop) {
      setTurno(prop)
    } else { turno === '⭕' ? setTurno('❌') : setTurno('⭕') }
  }

  const bnuevoJuego = () => {
    setNuevoJueggo(Math.random() * 10 + '')
    setGanador('')
  }
  return (
    <div className='flex justify-center items-center flex-col h-screen relative'>
      <TablaJuego setTurno={cambiarTurno} turno={turno} setGanador={esGanador} nuevojuego={nuevoJuego} ganador={ganador} />
      <Turno turno={turno} />
      <Button onClick={bnuevoJuego} className='absolute bottom-5'>Nuevo Juego</Button>
      {ganador && <Ganador ganador={ganador} setGanador={esGanador} setNuevoJuego={nuevoJueg} />}

    </div>
  )
}

export default App
