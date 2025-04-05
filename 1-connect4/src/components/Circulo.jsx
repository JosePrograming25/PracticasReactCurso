export default function Circulo ({ className, valido }) {
  return (
    <svg viewBox='0 0 120 120' version='1.1' xmlns='http://www.w3.org/2000/svg' className={className}>
      <circle cx='60' cy='60' r='50' fill='currentcolor' stroke={valido ? 'white' : 'none'} stroke-width='3pt' />
    </svg>
  )
}
