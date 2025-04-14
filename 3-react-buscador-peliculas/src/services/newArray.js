export default function newArray (limit, center, oldArray = []) {
  const centerInOldArray = oldArray.find(element => limit === element)
  // Revisa si hay que agregar un nuevo array deacuerdo al limite
  if (centerInOldArray) return oldArray
  // Paginaciones pequeñas
  else if (limit < 5) return Array.from({ length: limit }, (element, index) => index + 1)
  // unico caso donde el medio no debe de estar en el centro
  else if (center === 1) return Array.from({ length: 4 }, (element, index) => index + 1)
  const evalArray = Array.from({ length: 4 }, (element, index) => oldArray[index] + center - oldArray[1])
  const evaluacion = evalArray.indexOf(limit)
  if (evaluacion === -1) {
    console.log('no se ha encontrado')
  } else {

  }
  return evalArray
}
