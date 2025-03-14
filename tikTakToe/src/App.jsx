import React, { useState } from 'react'
import TablaJuego from './components/TablaJuego'
import Turno from './components/Turno'
import Ganador from './components/Ganador'
const App = () => {
  const [turno, setTurno] = useState('⭕')
  const [ganador, setGanador] = useState('')
  const [nuevoJuego, setNuevoJueggo] = useState('')
  const esGanador = gana => setGanador(gana)
  const nuevoJueg = prop => setNuevoJueggo(prop)

  const cambiarTurno = (prop) => {
    if (prop) {
      setTurno(prop)
    } else { turno === '⭕' ? setTurno('❌') : setTurno('⭕') }
  }
  return (
    <div className='flex justify-center items-center flex-col h-screen relative'>
      <TablaJuego setTurno={cambiarTurno} turno={turno} setGanador={esGanador} nuevojuego={nuevoJuego} ganador={ganador} />
      <Turno turno={turno} />
      {ganador && <Ganador ganador={ganador} setGanador={esGanador} setNuevoJuego={nuevoJueg} />}

    </div>
  )
}

export default App
