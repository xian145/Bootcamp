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
      {data.map((row, y) => { //data is the array of 8 arrays with 4 items each, with a total of 32 elements, so this will map eache 32 elements
        return row.map((cell, x) => {
          return <Cell key={y + '-' + x} />
        })
      })}
    </div>
  )
}