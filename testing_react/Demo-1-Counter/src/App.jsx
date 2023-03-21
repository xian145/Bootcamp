import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Counter</h1>
      <Button step={1}/>
      <Button step={10}/>
      <Button step={100}/>
      <Button step={0}/>
    </div>
  )
}

export default App
