export default function actualizarEstado (actualizador) {
  return (param) => actualizador(param)
}
