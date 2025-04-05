const URL_HECHOS_GATOS = 'https://catfact.ninja/fact'

export default async function obtenerHecho () {
  const res = await fetch(URL_HECHOS_GATOS)
  const result = await res.json()
  return result.fact
}
