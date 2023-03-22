import { useState } from "react"
import Form from "./components/Form"
import CardList from "./components/CardList"

function App() {
  const [cards, setCards] = useState([]) //instead of modified one card, we gonna create an array of cards
  
  const addNewCard = (cardInfo) => {
    
  }
  
  return (
    <div>
      <p className="text-blue-500">Hello, World!</p>
    </div>
  )
}

export default App