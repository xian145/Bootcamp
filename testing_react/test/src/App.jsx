import { useState } from 'react'
import reactLogo from './assets/react.svg' //calling an image from the folder "assets"
import './App.css'

function WelcomeMessage() { //the name of the function NEED to be with capital letter
  return <h1>Welcome!</h1>
} //we add a new function that will be a simple title h1 message (A component)

const buttonPress = (event) => { //here, i create a new constan that will be called when a button is pressed 
  alert('thank you!! c:')
}

function App() {
  const [count, setCount] = useState(0) // they dont need to be called with that name, just an example
  //first is the counter, just as we create a constant and the second is a function that modifieds "count"

  const message = 'Guten Tag' //we can make constants and use them in the return to print them in the page

  return (
    <div className="App">
      <WelcomeMessage/> {/* this is the way we call the funtion we previously talk */}
      <img src={reactLogo} className="logo react"></img> {/* we add the image, using the import image from the begining using curly brackets */}
      <h2>{message === 'Hello!' ? 'The message was hello!' : message}</h2> {/* as we said you can use JS inside of the HTML */}
      <button onClick={(event) => alert("YOU PRESS THE BUTTON!!!!!!!!!!!!")}>Don't press it</button> {/* we add an on click event and what to do with that in the same code */}
      <button onClick={buttonPress}>Press it</button> {/* we can define the event handler o function outside and call it here */}
      <div> {/* A div which contains buttons that modified a counter and a buttos which reset that cunter. */}
        <p>You clicked {count} time the button clicks</p> {/* wher we can llok for the counter */}
        <button onClick={() => setCount(count + 1)}>Clicks</button> {/* button with the actual funcion to modified the "count" */}
        <button onClick={() => setCount(0)}>Reset</button> {/* another button to set count to cero */}
      </div>
    </div>
  )
}

export default App