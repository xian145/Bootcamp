import { useState } from "react" //gonna change states

function AddCategory(props) {
  const [category, setCategory] = useState('')

  const handleChange = (event) => { //event can had any name
    setCategory(event.target.value)
    // console.log(category) //this is only to know if the code is working
  }

  const handleSubmit = (event) => {
    event.preventDefault() //when the event is fired prevent reload the page

    if (!category) { //this will fire if there is no a string
      alert('Please enter a category')
      return
    }

    props.onSubmit(category) //this will pass the content from category to the parent to add it to an array named categories, dont need to be called this way, but helps to know when is called
  }

  return (
    <form
      className='h-100 w-full flex items-center justify-center font-sans'
      onSubmit={handleSubmit}>
      <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
        <div className='mb-4'>
          <h1 className='text-grey-darkest'>Enter a category of bills</h1>
          <div className='flex mt-4'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
              placeholder='Electricity, Gas, etc'
              value={category}
              onChange={handleChange}
            />
            <button className='flex-no-shrink p-2 border-2 rounded bg-teal bg-green-500 text-white border-teal hover:text-white hover:bg-teal'>
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddCategory