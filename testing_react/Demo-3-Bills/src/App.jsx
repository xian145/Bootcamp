import { useState, useEffect } from "react" //adding useState to manage states and useEffect to retrieve information from local storage
import AddBill from "./components/Addbill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)
  const [categories, setCategories] = useState([]) //create a state modifier for categories which are an empty array
  useEffect(() => {
    if (localStorage.getItem('categories')) { //if there is something to get stored...
      setCategories(localStorage.getItem('categories')) //store it in categories (the one defined in useState as an empty array)
    } //we are telling that if something need to be stored bc is in localStorage we gonna store it in categories
    
    if (!categories.length) {
      setShouldShowAddCategory(true)
    }
  })

  const addCategory = (category) => { //function which enter category as a value when called
    const updateCategories = [...(categories || []), category] //const with the empty array that will be filled, have a condition that if its false will give an empty array
    setCategories(updateCategories) //function to modified the array with the new category
    setShouldShowAddCategory(false) //change to false bc we already add a category and need to be replace we a new render for NavBar and BillsTable
    localStorage.setItem('categories', JSON.stringify(updateCategories)) //put the item named 'categories' (dont need to be called like this) in a form of a JSON string from the constant updateCategories
  } //new function to add the categories to the array

  return (
    <div>
      {shouldShowAddCategory ? ( //look if thats true and if it is render the AddCategory component in the DOM
      <AddCategory
        onSubmit={addCategory} //this will pass as a prop and can be used inside of it, dont need to be called onSubmit, but helps to know when will be called
      />
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