import ObjetoTablero from './objetoTablero'

export default function TablaJuego ({ tablero, ganador, jugador, setTablero, setJugador }) {
  return (
    <div className='flex flex-row items-center justify-center max-w-[700px] max-h-[700px] my-4'>
      {/* por cada fila, se crea un div que contiene un div por cada columna
      nota automatizar en futuro */}
      {tablero
        ? tablero.map((elem, i) =>
          <div key={i + 'filas'} className='flex justify-center flex-col-reverse'>
            {elem.map((ele, j) =>
              <ObjetoTablero
                key={`fila${i}columna${j}`}
                i={[i, j]} jugador={jugador[0]}
                ganador={ganador}
                setTablero={setTablero}
                objetoTabla={ele}
                tamanio={elem.length - 1}
                setJugador={setJugador}
                tablero={tablero}
              />
            )}
          </div>)
        : undefined}

    </div>
  )
}
