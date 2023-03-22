import { useState } from "react"
import AddBill from "./components/Addbill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)
  const [categories, setCaries] = useState([]) //create a state modifier for categories which are an empty array

  const addCategory = (category) => {

  } //new function to add the categories to an array

  return (
    <div>
      {shouldShowAddCategory ? ( //look if thats true and if it is render the AddCategory component in the DOM
      <AddCategory/>
      ) : ( //if not will render NavBar and BillsTable
        <div>
          <NavBar />
          <BillsTable />
        </div>
      )}
    </div>
  )
}

export default App