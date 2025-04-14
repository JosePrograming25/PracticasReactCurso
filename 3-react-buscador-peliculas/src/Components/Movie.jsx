export default function Movie ({ movie }) {
  const { id, title, year, type, poster } = movie
  return (
    <li key={id} className='relative'>
      <img src={poster} alt={title} className='rounded-sm' />
      <div className='absolute bottom-0 bg-black/70 w-full px-1 py-2'>
        <h3 className='text-lg text-center font-bold'>{title}</h3>
        <p className='text-sm  text-center'>{year} - {type.toUpperCase()}</p>
      </div>
    </li>
  )
}
