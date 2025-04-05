export default function cortarPalabras (parrafo, reduccion, separacion = ' ') {
  // verificar que el parrafo tenga palabras minimas
  if (!parrafo) return ''
  // verificar que parrafo sea un string

  // verificar que reduccion sea un numero

  return parrafo.split(' ').slice(0, reduccion).join(separacion)
}
