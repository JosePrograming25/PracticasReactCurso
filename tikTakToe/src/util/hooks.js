const comprobarCoincidencia = (i, arreglo) => {
  const x = null
  const coincidencias3 = [
    [
      i, i, i,
      x, x, x,
      x, x, x
    ],
    [
      x, x, x,
      i, i, i,
      x, x, x
    ],
    [
      x, x, x,
      x, x, x,
      i, i, i
    ],
    [
      i, x, x,
      i, x, x,
      i, x, x
    ],
    [
      x, i, x,
      x, i, x,
      x, i, x
    ],
    [
      x, x, i,
      x, x, i,
      x, x, i
    ],
    [
      i, x, x,
      x, i, x,
      x, x, i
    ],
    [
      x, x, i,
      x, i, x,
      i, x, x
    ]
  ]
  let iguales = 0
  let hayGanador = null
  if (arreglo.length === 9) {
    coincidencias3.forEach(ele => {
      ele.forEach((e, index) => {
        if (e === arreglo[index]) {
          iguales = iguales + 1
          if (iguales === 3) {
            console.log(e, iguales)
            hayGanador = e
            return e
          }
        }
      })
      if (iguales === 3) {
        return hayGanador
      }
      iguales = 0
    })
  }
  return hayGanador
}

export {
  comprobarCoincidencia
}
