import { equis, circulo } from '../util/constantes'

export default function ({ turno }) {
  const render = 'cursor-default text-3xl transition-all duration-500 ease-linea opacity-100'

  return (
    <div className='w-1/2 text-center py-6'>
      <h3 className='text-large font-sans text-white'> Turno</h3>
      <div className='relative'>
        <span className={turno !== equis ? 'opacity-0' : render}>{turno === equis ? equis : undefined}</span>
        <span className={turno !== circulo ? 'opacity-0' : render}>{turno === circulo ? circulo : undefined}</span>
      </div>
    </div>
  )
}
