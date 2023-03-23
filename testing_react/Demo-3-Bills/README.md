this project as always in this Demos, use react as a freamwork with tailwind css, but have an extra, a date picker mounted in react, to install it we need to run in the terminal:

$ npm install react-datepicker

then in the archive we gonna use it import it as:

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

dont forget to call useState()

const [date, setDate] = useState(new Date())
//...
const handleChangeDate = e => {
  setDate(e.target.value)
}