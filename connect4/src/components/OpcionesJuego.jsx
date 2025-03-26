import Boton from './Boton'
import Circulo from './Circulo'
import Label from './Label'
import Select from './Select'

export default function OpcionesJuego ({ opcionTablero, cambioTablero, jugador, cambioJugar }) {
  return (
    <div className='flex flex-col items-center justify-center my-3'>
      <Label>Tipo de Tablero</Label>
      <Select value={opcionTablero} onChange={cambioTablero}>

        <option value='7x8'>7x8 (Estandar)</option>
        <option value='6x7'>6x7 (Corta)</option>
        <option value='8x9'>8x9 (Larga)</option>
      </Select>

      <Label>Color de Ficha</Label>
      <div className='flex justify-between gap-2'>
        <div className='flex flex-col items-center'>
          <Label className='text-base'>Jugador 1</Label>
          <Circulo color={jugador[0]} className='w-10 h-10' />
        </div>
        <div><Boton onClick={cambioJugar} className='text-2xl cursor-pointer relative top-7'>🔁</Boton></div>
        <div className='flex flex-col items-center'>
          <Label className='text-base'>Jugador 2</Label>
          <Circulo color={jugador[1]} className='w-10 h-10' />
        </div>
      </div>

    </div>
  )
}
