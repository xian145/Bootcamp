import { useState, useEffect } from 'react' //add useEffect to load the data the first time we load the DOM, so useEffect should have square brackets
import Cell from './Cell' //call cell from component cell

export default function Spreadsheet() {
  const [data, setData] = useState([ //array containing 8 arrays
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ])

  useEffect(() => {
    const thereIsData = window.localStorage.getItem('spreadsheet') //this will retrieve from local storage what is inside of spreadshet key
    if (thereIsData) setData(JSON.parse(thereIsData)) //if we get something in 'data' will pass that information to data usign setData
  }, [window.localStorage])

  const updateData = (x, y, value) => {
    const isData = structuredClone(data) //is data can have any name
    isData[y][x] = value //the square bracket are use to select first the array, then the postion inside the array
    setData(isData) //this will update the array and how isData is a clone we will change everything in data

    if (window && window.localStorage) {
      window.localStorage.setItem('spreadsheet', JSON.stringify(isData)) //put in local storage wit the key 'spreadsheet' the data from the array of arrays
    }
  }

  return (
    <div className={`grid grid-cols-${data[0].length}`}> {/* js code returns the lenght of the first array in teh array */}
      {data.map((row, y) => { //data is the array of 8 arrays with 4 items each, with a total of 32 elements, so this will map each 32 elements
        // 'row' is the array inside of the array and 'y' is the index of the array inside the array
        return row.map((cell, x) => { //run for every element inside the array for each array, cell is the value inside of the array and x the index
          return <Cell 
          value={cell} //value inside of the array passed as a props named initialValue, and as we said, cell is the value inside the array
          key={y + '-' + x}
          x={x}
          y={y}
          updateData={updateData}
          /> //render a div for eache element in the arrays, a total of 32, the key is the index inside the first array with the index of the second array (0-4)
        })
      })}
    </div>
  )
}