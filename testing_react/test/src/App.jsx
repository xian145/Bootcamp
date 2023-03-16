import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function WelcomeMessage() {
  return <h1>Welcome!</h1>
} //we add a new function that will be a simple title h1 message (A component)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WelcomeMessage/> {/* this is the way we call the funtion we previously talk */}
    </div>
  )
}

export default App