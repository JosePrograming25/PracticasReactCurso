export default function crearArreglo2D (filas, columnas, elemento) {
  return Array.from(
    { length: filas },
    () => Array.from(
      { length: columnas },
      elemento
    )
  )
}
