import { useState } from 'react'
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

  return (
    <div>
      {data.map((row, y) => { //data is the array of 8 arrays with 4 items each, with a total of 32 elements, so this will map each 32 elements
        // 'row' is the array inside of the array and 'y' is the index of the array inside the array
        return row.map((cell, x) => { //run for every element inside the array for each array
          return <Cell key={y + '-' + x} /> //render a div for eache element in the arrays, a total of 32, the key is the index inside the first array with the index of the second array (0-4)
        })
      })}
    </div>
  )
}