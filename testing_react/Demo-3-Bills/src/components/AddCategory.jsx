import { useState } from "react" //gonna change states

function AddCategory(props) {
  const [category, setCategory] = useState('')

  const handleChange = (event) => { //event can had any name
    setCategory(event.target.value)
    console.log(category)
  }

  return (
    <form>
      <h1>Enter a category of bills</h1>
      <input 
      value={category} //need to be value
      onChange={handleChange} //on any change gonna call handleChange function
      className='form-input block w-64 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
      placeholder="Internet, Gas, etc"/>
      <button className='ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 
      focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>Add</button>
    </form>
  )
}

export default AddCategory