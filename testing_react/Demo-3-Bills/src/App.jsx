import { useState, useEffect } from "react" //adding useState to manage states and useEffect to retrieve information from local storage
import AddBill from "./components/AddBill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false) // change to flase bc this will be checked with useEffect
  const [categories, setCategories] = useState([]) //create a state modifier for categories which are an empty array
  const [bills, setBills] = useState([])
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false) //similar to should category, if we have something to show, will render
  const [activeCategory, setActiveCategory] = useState('') //this will help us to show only the category we select in the NavBar

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }
  
  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const setNewActiveCategory = index => {
    setActiveCategory(index)
  }

  useEffect(() => { //this will rin when the DOM is mounted
    const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories')) //interpret as a JSON with JSON.parse the value with the key 'categories'
    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills')) //similar as above but for bills, now we use the kew "bills" instead of 'categories'

    setCategories(categoriesInLocalStorage) //change the values from categories to a JSON.parse of the information from 'categories' key
    setBills(billsInLocalStorage) //change the values from bills to a JSON.parse of the information from 'bills' key
    
    if (!categoriesInLocalStorage) { //if there is nothing here, change to true
      setShouldShowAddCategory(true) //change to true if it is empty so we render AddCategories
    } //this will run over the useState defined first

    if (!billsInLocalStorage) {
      setShouldShowAddBill(true)
    }
  }, []) //this empty array will make to run this only one time when the DOM is mounted

  const addCategory = (category) => { //function which enter category as a value when called
    const updateCategories = [...(categories || []), category] //const with the empty array that will be filled, have a condition that if its false will give an empty array
    setCategories(updateCategories) //function to modified the array with the new category
    setShouldShowAddCategory(false) //change to false bc we already add a category and need to be replace we a new render for NavBar and BillsTable
    localStorage.setItem('categories', JSON.stringify(updateCategories)) //use the key 'categories' (dont need to be called like this) to save the value as a JSON string from the constant updateCategories
  } //new function to add the categories to the array

  const addBill = (amount, category, date) => { //funtion that enter amount form AddBill component, category from AddCateory and date from AddBill
    const bill = {amount, category, date} //this an object with amount, category and date
    const updatedBills = [...(bills || []), bill] //every time we add a new amount with any category this array will be updated with the last object plus the new one
    setBills(updatedBills) //bills its modified with the value inside of updateBills
    setShouldShowAddBill(false) //change to false bc we already add a new amount
    localStorage.setItem('bills', JSON.stringify(updatedBills)) //usgin the key 'bills' to store in local sotrage as a string JSON so we can call it after in useEffect hook
  }

  const removeBill = (index) => {
    let updatedBills = [...bills]
    updatedBills = updatedBills.slice(0, index).concat(updatedBills.slice(index + 1, updatedBills.length)) //this will slice the array from 0 to the index we want to delete,
    //since the last number is not includes, this will cut the index of the elemtn i want to delet, and wil concatenate with the same array but from the index slected plus one to the legnth of the array, deleting the bill i selected
    setBills(updatedBills) //update the list of bills using the seBills state manager
    localStorage.setItem('bills', JSON.stringify(updatedBills)) //modified the local storage with the new value for the key "bills"
  }

  const activeBills = () => {
    return bills?.filter(bill => activeCategory ? bill.category === activeCategory : true).sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  } //this function will filter ussing the category selected

  return (
    <div className="App">
      {shouldShowAddCategory ? ( //if there is not any category this will be true
        <AddCategory onSubmit={addCategory} /> //render to add one category
      ) : shouldShowAddBill ? ( //if its already at least one category will ask if there is al least one bill
        <AddBill onSubmit={addBill} categories={categories} /> //if there is no bill will render the option to render it, and pass as a props the onSubmit with the function addBill and categories
      ) : ( // if its already at least one bill will render the rest
        <div>
          <NavBar
          activeCategory={activeCategory}
          setNewActiveCategory={setNewActiveCategory}
          categories={categories} 
          showAddCategory={showAddCategory} />
          <div className="flex">
            <div className="w-full">
              <BillsTable 
                bills={activeBills()}
                showAddBill={showAddBill}
                removeBill={removeBill}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App