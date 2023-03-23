import { useState, useEffect } from "react"

function Cell() {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    window.document.addEventListener('unselectAll', () => { //we listen thor the trigger event and then
      setIsSelected(false) //we set isSelected  to false so the input change to a div
    })
  }, []) //only execute when render the DOM

  const cellStyle = 'border-2 p-3 cursor-pointer hover:bg-gray-300 focus:bg-green-100'

  if (isSelected) { //if its true will change the div to an input
    return <input className={cellStyle}/>
  }

  return <div
  onClick={(event) => {
  window.document.dispatchEvent(new Event('unselectAll')) //custom event named 'unselectAll triggered when we click
  {setIsSelected(true)}}
  } //change to true if we click it
  className={cellStyle}
  >cell
  </div>
}

export default Cell