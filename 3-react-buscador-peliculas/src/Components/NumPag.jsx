export default function NumPag ({ className, item, setPage, page }) {
  const handlerClick = event => {
    setPage(item)
  }
  return (
    <button
      className={`${page === item ? 'bg-blue-600' : 'bg-black/50'} py-1 px-2 rounded-sm cursor-pointer font-bold`} onClick={handlerClick}
    >
      {item}
    </button>
  )
}
