export default function ({ ganador, setGanador, setNuevoJuego }) {
  const jugarNuevo = () => {
    setGanador('')
    setNuevoJuego(Math.random() * 10 + '')
  }
  return (
    <div className='h-screen absolute w-screen bg-[#080808d3]'>
      <div className='w-full h-full flex justify-center flex-col gap-8 items-center'>
        <p className='text-5xl text-white'>{ganador === 'Empate' ? '' : 'Ganador'}</p>
        <p className='text-5xl text-white'>{ganador}</p>
        <button className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2' onClick={jugarNuevo}>Jugar De Nuevo</button>
      </div>

    </div>
  )
}
