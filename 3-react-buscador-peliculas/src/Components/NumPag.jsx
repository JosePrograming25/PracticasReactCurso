export default function NumPag ({ className, item, setPage }) {
  const handlerClick = event => {
    setPage(item)
  }
  return (
    <span className={className} onClick={handlerClick}>
      {item}
    </span>
  )
}
