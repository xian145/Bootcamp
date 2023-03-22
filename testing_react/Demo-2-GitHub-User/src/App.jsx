import { useState } from "react"
import Form from "./components/Form"
import CardList from "./components/CardList"

function App() {
  const [cards, setCards] = useState([]) //instead of modified one card, we gonna create an array of cards
  
  const addNewCard = (cardInfo) => {
    setCards([...cards, cardInfo]) //modified the array with the same array as we have and then add in last position the new information
  }
  
  return (
    <div>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'> {/* paddin top 10, text centered, margin top 6, text extra large, spaces between lines 9, font extra bold, text gray */}
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} /> {/* this is actually a prop function that is sended to the child (form) when submitted */}
      <CardList cards={cards} /> {/* cards is an array that will be passed as a prop to CardList */}
    </div>
  )
}

export default App