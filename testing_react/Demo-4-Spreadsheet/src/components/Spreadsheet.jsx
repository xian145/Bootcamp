import { useState } from 'react'

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
      Spreadsheet
    </div>
  )
}