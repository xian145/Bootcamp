import { useState } from "react"
import AddBill from "./components/Addbill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)

  return (
    <div>
      {shouldShowAddCategory ? (
      <AddCategory/>
      ) : (
        <div>
          <NavBar />
          <BillsTable />
        </div>
      )}
    </div>
  )
}

export default App