import useHecho from './Hooks/useHecho'
import useImgGatHecho from './Hooks/useImgGatHecho'
import cortarPalabras from './service/cortarPalabras'

const App = () => {
  const { hecho, ActualizarHecho } = useHecho()
  const { urlImagen } = useImgGatHecho({ hecho })

  return (
    <div className='flex flex-col justify-around items-center h-[100vh] p-5 bg-[#282C34]'>

      <p className='text-lg max-w-200 text-center font-medium text-white'>{hecho}</p>

      <img
        src={urlImagen} alt={`gato con ${cortarPalabras(hecho, 3)}`}
        className='max-h-3/4 rounded-2xl'
      />

      <button className='cursor-pointer font-bold border-4 border-indigo-300 p-2 hover:border-indigo-400 transtition ease-in-out duration-200 rounded-md w-40 mt-2 text-white' onClick={ActualizarHecho}>Cambiar hechos</button>

    </div>
  )
}

export default App
