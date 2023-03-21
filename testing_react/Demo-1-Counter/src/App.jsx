import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increment = (step) => {
    setCount(count + step)
  } // this function us passed to the chindren and call it when the button is pressed

  return (
    <div className='App'>
      <h1>Counter: {count}</h1>
      <Button step={1} increment={increment}/> {/* one is the name of the prop and the other is the name of the function */}
      <Button step={10}/>
      <Button step={100}/>
      <Button step={'Clear'}/> {/* every one of this components send a prop named step and increment */}
    </div>
  )
}

export default App
