export default function OpcionesJuego ({ opcionTablero, handleChange }) {
  return (
    <div>
      <label className='text-lg font-bold pb-4'>Tipo de Tablero</label>
      <select className='block w-min-[250px] p-2 mb-6 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={opcionTablero} onChange={handleChange}>
        <option value='6x7'>6 x 7 (Estandar)</option>
        <option value='5x6'>5 x 6 (Corta)</option>
        <option value='8x9'>8 x 9 (Larga)</option>
      </select>
      <p>Opciones seleccionadas: {opcionTablero}</p>
    </div>
  )
}
