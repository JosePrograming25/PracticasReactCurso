import Movie from './Movie'

export default function ListMovies ({ movies }) {
  return (

    <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4'>
      {movies
        ? movies.search.map((movie) => <Movie key={movie.id} movie={movie} />)
        : <p className='text-center p-4'>No hay resultados</p>}
    </ul>

  )
}
