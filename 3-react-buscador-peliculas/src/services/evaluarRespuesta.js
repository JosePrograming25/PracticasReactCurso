export default function (sinFormato) {
  if (!sinFormato.Search) return
  const array = sinFormato.Search.map(item => {
    return {
      title: item.Title,
      year: item.Year,
      id: item.imdbID,
      type: item.Type,
      poster: item.Poster
    }
  })
  return {
    search: array,
    total: sinFormato.totalResults
  }
}
