import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter] =useState(0)
  const increment = (step) => {
    if (step === 'Clear') {
      setCount(0) 
      setCounter(0)
      return
    }if (step === 'Save') {
      setCounter(counter + count)
      return
    } else setCount(count + step)
  } // this function us passed to the chindren and call it when the button is pressed

  return (
    <div className='App'>
      <h1>Counter: {count}</h1>
      <Button step={1} increment={increment}/> {/* one is the name of the prop and the other is the name of the function */}
      <Button step={10} increment={increment}/>
      <Button step={100} increment={increment}/>
      <Button step={-1} increment={increment}/>
      <Button step={-10} increment={increment}/>
      <Button step={-100} increment={increment}/>
      <Button step={'Save'} increment={increment}/>
      <Button step={'Clear'} increment={increment}/> {/* every one of this components send a prop named step and increment */}
      <p>{counter}</p>
    </div>
  )
}

export default App
