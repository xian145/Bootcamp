import AddBill from "./components/Addbill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTables"
import NavBar from "./components/NavBar"

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true)
  
  return (
    <div>
      <NavBar />
      <BillsTable />
    </div>
  )
}

export default App
