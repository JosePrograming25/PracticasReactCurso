import { circulo, equis } from './constantes'

const comprobarCoincidencia = (arreglo) => {
  const coincidencias = [
    // horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonales
    [0, 4, 8],
    [6, 4, 2]

  ]

  for (const [a, b, c] of coincidencias) {
    if (
      circulo === arreglo[a] &&
      arreglo[a] === arreglo[b] &&
      arreglo[b] === arreglo[c]
    ) return arreglo[a]
    if (
      equis === arreglo[a] &&
      arreglo[a] === arreglo[b] &&
      arreglo[b] === arreglo[c]
    ) return arreglo[a]
  }
}

export {
  comprobarCoincidencia
}
