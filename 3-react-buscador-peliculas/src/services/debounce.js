export default function debounce (callback, time = 500) {
  let prompter
  return (...arg) => {
    clearTimeout(prompter)
    prompter = setTimeout(() => {
      callback(...arg)
    }, time)
  }
}
