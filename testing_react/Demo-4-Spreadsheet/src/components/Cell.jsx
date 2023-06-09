import { useState, useEffect } from "react"

function Cell({ value, x, y, updateData }) {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    window.document.addEventListener('unselectAll', () => { //we listen thor the trigger event and then
      setIsSelected(false) //we set isSelected  to false so the input change to a div
    })
  }, []) //only execute when render the DOM

  const cellStyle = 'border-2 p-6 cursor-pointer hover:bg-gray-300 focus:bg-green-100'

  if (isSelected) { //if its true will change the div to an input
    return <input 
    value={value} //change to value defined above so we can change it with setValue
    onChange={(event) => {
      updateData(x, y, event.target.value) //call the funtion to add the values to the actual array
    }}
    className={cellStyle}/>
  }

  return <div
  onClick={(event) => {
  window.document.dispatchEvent(new Event('unselectAll')) //custom event named 'unselectAll triggered when we click
  {setIsSelected(true)}}
  } //change to true if we click it
  className={cellStyle}
  >{value || <span className='text-gray-200'>-</span>}{/* if value is an empty array we change to a "-" so it keeps the same size every time */}
  </div>
}

export default Cell