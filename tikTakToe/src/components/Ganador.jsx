import Button from './Button'

export default function ({ ganador, setGanador, setNuevoJuego }) {
  const jugarNuevo = () => {
    setGanador('')
    setNuevoJuego(Math.random() * 10 + '')
  }
  return (
    <div className='h-screen absolute w-screen bg-[#080808ef]'>
      <div className='w-full h-full flex justify-center flex-col gap-8 items-center'>
        <p className='text-5xl text-white'>{ganador === 'Empate' ? '' : 'Ganador'}</p>
        <p className='text-5xl text-white'>{ganador}</p>
        <Button onClick={jugarNuevo}>Nuevo juego</Button>
      </div>

    </div>
  )
}
