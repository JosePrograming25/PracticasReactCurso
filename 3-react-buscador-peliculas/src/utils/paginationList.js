export default function paginationList (pagCurrent, numEndPage) {
  const paginationArrayBefore = Array.from(
    { length: 3 },
    (_, i) => pagCurrent - 1 - i)
    .filter(el => el > 0)
    .reverse()

  const paginationArrayAfter = Array.from(
    { length: 3 },
    (_, i) => pagCurrent + 1 + i)
    .filter(el => el <= numEndPage)

  return [
    ...paginationArrayBefore,
    pagCurrent,
    ...paginationArrayAfter
  ]
}
