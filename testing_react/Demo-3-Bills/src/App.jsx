import { useState } from "react"
import AddBill from "./components/Addbill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)
  const [categories, setCategories] = useState([]) //create a state modifier for categories which are an empty array

  const addCategory = (category) => { //function which enter category as a value when called
    const updateCategories = [...(categories || []), category] //const with the empty array that will be filled
    setCategories(updateCategories) //function to modified the array with the new category
    setShouldShowAddCategory(false) //change to false bc we already add a category and need to be replace we a new render for NavBar and BillsTable
  } //new function to add the categories to the array

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