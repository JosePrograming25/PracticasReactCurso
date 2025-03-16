export default function TablaJuego ({ tablero }) {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-950 max-w-[700px] max-h-[700px]'>
      {/* por cada fila, se crea un div que contiene un div por cada columna
      nota automatizar en futuro */}
      {tablero
        ? tablero.map((ele, i) =>
          <div key={i + 'filas'} className='flex justify-center'>
            {ele.map((ele, i) => <div key={i + 'columnas'}>h</div>)}
          </div>)
        : undefined}

    </div>
  )
}
