export default function Select ({ children, value, onChange }) {
  return (
    <select className='block w-min-[250px] p-2 mb-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={value} onChange={onChange}>
      {children}
    </select>
  )
}
