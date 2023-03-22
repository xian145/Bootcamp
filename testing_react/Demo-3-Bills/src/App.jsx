import { useState, useEffect } from "react" //adding useState to manage states and useEffect to retrieve information from local storage
import AddBill from "./components/Addbill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false) // change to flase bc this will be checked with useEffect
  const [categories, setCategories] = useState([]) //create a state modifier for categories which are an empty array
  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }
  
  useEffect(() => { //this will rin when the DOM is mounted
    const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories')) //interpret as a JSON with JSON.parse the value with the key 'categories'
    if (categoriesInLocalStorage !== categories) { //if there is something to be store that is not stored yet...
      setCategories(categoriesInLocalStorage) //store it in categories (the one defined in useState as an empty array)
    } //we are telling that if something need to be stored bc is in localStorage we gonna store it in categories
    
    if (!categoriesInLocalStorage) { //if there is nothing here, change to true
      setShouldShowAddCategory(true) //change to true if it is empty so we render AddCategories
    } //this will run over the useState defined first
  }, []) //this empty array will make to run this only one time when the DOM is mounted

  const addCategory = (category) => { //function which enter category as a value when called
    const updateCategories = [...(categories || []), category] //const with the empty array that will be filled, have a condition that if its false will give an empty array
    setCategories(updateCategories) //function to modified the array with the new category
    setShouldShowAddCategory(false) //change to false bc we already add a category and need to be replace we a new render for NavBar and BillsTable
    localStorage.setItem('categories', JSON.stringify(updateCategories)) //use the key 'categories' (dont need to be called like this) to save the value as a JSON string from the constant updateCategories
  } //new function to add the categories to the array

  return (
    <div>
      {shouldShowAddCategory ? ( //look if thats true and if it is render the AddCategory component in the DOM
      <AddCategory
        onSubmit={addCategory} //this will pass as a prop and can be used inside of it, dont need to be called onSubmit, but helps to know when will be called
      />
      ) : ( //if not will render NavBar and BillsTable
        <div>
          <NavBar 
            categories={categories} //we send as a prop the categories we have already saved
            showAddCategory={showAddCategory}
          />
          <BillsTable />
        </div>
      )}
    </div>
  )
}

export default App