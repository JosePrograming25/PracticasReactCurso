import paginationList from '../utils/paginationList'
import NumPag from './NumPag'

export default function ListPag ({ page, setPage, limit }) {
  const arrayPagination = paginationList(page, limit)
  return (
    <>
      {limit
        ? (
          <div className='py-4'>
            <div className='flex justify-center items-center gap-2'>
              {arrayPagination.map((el, i) =>
                <NumPag
                  key={i}
                  page={page}
                  setPage={setPage}
                  item={el}
                />)}
            </div>
          </div>
          )
        : undefined}
    </>
  )
}
