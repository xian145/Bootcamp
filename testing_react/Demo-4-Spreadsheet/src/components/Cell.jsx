import { useState } from "react"

function Cell() {
  const [isSelected, setIsSelected] = useState(false)

  const cellStyle = 'border-2 p-3'

  if (isSelected) { //if its true will change the div to an input
    return <input className={cellStyle}/>
  }

  return <div
  onClick={(event) => {setIsSelected(true)}} //change to true if we click it
  className={cellStyle}
  >cell
  </div> //only creat a div with the cell text
}

export default Cell