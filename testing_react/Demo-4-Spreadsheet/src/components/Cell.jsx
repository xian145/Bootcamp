import { useState, useEffect } from "react"

function Cell() {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    window.document.addEventListener('unselectAll', () => {
      setIsSelected(false)
    })
  }, []) //only execute when render the DOM

  const cellStyle = 'border-2 p-3 cursor-pointer hover:bg-gray-300 focus:bg-green-100'

  if (isSelected) { //if its true will change the div to an input
    return <input className={cellStyle}/>
  }

  return <div
  onClick={(event) => {
  window.document.dispatchEvent(new Event('unselectAll'))
  {setIsSelected(true)}}
  } //change to true if we click it
  className={cellStyle}
  >cell
  </div>
}

export default Cell