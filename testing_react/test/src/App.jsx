import { useState } from 'react'
import reactLogo from './assets/react.svg' //calling an image from the folder "assets"
import './App.css'

function WelcomeMessage() {
  return <h1>Welcome!</h1>
} //we add a new function that will be a simple title h1 message (A component)

function App() {
  const [count, setCount] = useState(0)
  const message = 'Guten Tag' //we can make constants and use them in the return to print them in the page

  return (
    <div className="App">
      <WelcomeMessage/> {/* this is the way we call the funtion we previously talk */}
      <img src={reactLogo} className="logo react"></img> {/* we add the image, using the import image from the begining using curly brackets */}
      <h2>{message === 'Hello!' ? 'The message was hello!' : message}</h2> {/* as we said you can use JS inside of the HTML */}
      <button onClick={(event) => alert("YOU PRESS THE BUTTON!!!!!!!!!!!!")}>Don't press it</button> {/* we add an on click event and what to do with that in the same code */}
    </div>
  )
}

export default App