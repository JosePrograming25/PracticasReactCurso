import NumPag from './NumPag'

export default function ListPag ({ page, listPag, setPage, limit }) {
  const stilePag = (prop) => {
    if (prop === page) return 'p-2 cursor-pointer underline decoration-1 text-blue-300 font-bold'
    return 'p-2 cursor-pointer hover:font-bold hover:underline hover:decoration-1 hover:text-blue-200'
  }
  const subtractPage = event => {
    if (page === 1) return
    setPage(page - 1)
  }

  const plusPage = event => {
    if (page + 1 > Math.ceil(limit / 10)) return
    setPage(page + 1)
  }

  return (
    listPag.length !== 0
      ? <div className='text-center p-4'>
        <span onClick={subtractPage} className={stilePag()}>◀︎</span>
        {listPag.map(item =>
          <NumPag className={stilePag(item)} item={item} key={item} setPage={setPage} />
        )}
        <span onClick={plusPage} className={stilePag()}>▶︎</span>
      </div>
      : undefined
  )
}
