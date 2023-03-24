import { useState, useEffect } from "react"

function Cell({initialValue}) {
  const [isSelected, setIsSelected] = useState(false)
  const [value, setValue] = useState(initialValue) //so we can change the value

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
      setValue(event.target.value) //change the use the event on change targeting what "value" and this value is rendered inside the div after deselect
    }}
    className={cellStyle}/>
  }

  return <div
  onClick={(event) => {
  window.document.dispatchEvent(new Event('unselectAll')) //custom event named 'unselectAll triggered when we click
  {setIsSelected(true)}}
  } //change to true if we click it
  className={cellStyle}
  >{value}
  </div>
}

export default Cell