function Button({step, increment}) {
  return <button
  onClick={() => {
    increment(step)
  }}
  >{step}</button>
}
// the increment prop calls a function name increment, is not a value is a function
export default Button