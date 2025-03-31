import Circulo from './Circulo'

export default function Ganador ({ ganador, setGanador }) {
  return (
    <div className='bg-[#000000cb] p-10 rounded-md absolute flex flex-col justify-center items-center'>
      <h4 className='text-2xl'>Ganó el {ganador}!!</h4>
      <Circulo className={`text-jugador-${ganador} w-15`} />
    </div>
  )
}
