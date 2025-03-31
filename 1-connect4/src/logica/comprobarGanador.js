const combiGanador = {
  validacion: [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8]
  ]

}

export default function comprobarGanador (tabla, dimension) {
  const [x, y] = dimension.split('x').map(Number)
  // hace la verificacion de acuerdo a como se mueve en el ajedrez la validacion
  const validacion = combiGanador.validacion

  for (let j = 0; j < y; j++) {
    for (let i = 0; i < y - 3; i++) {
      if ( // verificacion vertical
        j < x &&
          tabla[j][validacion[i][0]] !== '' &&
          tabla[j][validacion[i][0]] !== null &&
          tabla[j][validacion[i][0]] === tabla[j][validacion[i][1]] &&
          tabla[j][validacion[i][1]] === tabla[j][validacion[i][2]] &&
          tabla[j][validacion[i][2]] === tabla[j][validacion[i][3]]
      ) {
        return tabla[j][validacion[i][0]]
      } else if ( // verificacion Horizontal
        i < x - 3 &&
          tabla[validacion[i][0]][j] !== '' &&
          tabla[validacion[i][0]][j] !== null &&
          tabla[validacion[i][0]][j] === tabla[validacion[i][1]][j] &&
          tabla[validacion[i][1]][j] === tabla[validacion[i][2]][j] &&
          tabla[validacion[i][2]][j] === tabla[validacion[i][3]][j]
      ) {
        return tabla[validacion[i][0]][j]
      } else if ( // verificacion diagonal izquierda derecha
        j < x - 3 &&
          tabla[j][validacion[i][0]] !== '' &&
          tabla[j][validacion[i][0]] !== null &&
          // empieza la verificacion
          // el primer elemento             segundo
          tabla[j][validacion[i][0]] === tabla[j + 1][validacion[i][1]] &&
          tabla[j + 1][validacion[i][1]] === tabla[j + 2][validacion[i][2]] &&
          tabla[j + 2][validacion[i][2]] === tabla[j + 3][validacion[i][3]]
      ) {
        return tabla[j][validacion[i][0]]
      } else if ( // verificacion diagonal derecha izquierda
        j > 2 &&
          j < x &&
          tabla[j][validacion[i][0]] !== '' &&
          tabla[j][validacion[i][0]] !== null &&
          // empieza la verificacion
          // el primer elemento             segundo
          tabla[j][validacion[i][0]] === tabla[j - 1][validacion[i][1]] &&
          tabla[j - 1][validacion[i][1]] === tabla[j - 2][validacion[i][2]] &&
          tabla[j - 2][validacion[i][2]] === tabla[j - 3][validacion[i][3]]
      ) {
        return tabla[j][validacion[i][0]]
      }
    }
  }
  return ''
}
