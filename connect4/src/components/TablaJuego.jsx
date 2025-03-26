import Circulo from './Circulo'

export default function TablaJuego ({ tablero }) {
  return (
    <div className='flex flex-col items-center justify-center max-w-[700px] max-h-[700px] my-4'>
      {/* por cada fila, se crea un div que contiene un div por cada columna
      nota automatizar en futuro */}
      {tablero
        ? tablero.map((ele, i) =>
          <div key={i + 'filas'} className='flex justify-center'>
            {ele.map((ele, i) =>
              <div className='w-15 h-15 flex items-center justify-center p-2' key={i + 'columnas'}>
                <Circulo color='FFFFFF' opacidad='0F' />
              </div>
            )}
          </div>)
        : undefined}

    </div>
  )
}
