export default function Label ({ children, className }) {
  return (
    <label className={className || 'text-lg font-bold pb-0.5'}>{children}</label>
  )
}
