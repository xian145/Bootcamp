import { useState } from 'react'

function AddBill(props) {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState(props.categories[0]) //will call the categories array from the parent in the first value of teh array

  const handleChangeAmount = (event) => {
		let newAmount = parseInt(event.target.value, 10) //variable taht will take the value of the amount in input but entered as a number 
    if (isNaN(newAmount)) newAmount = '' //if is not a number return an empty string
    setAmount(newAmount) //if its a number setAmount is called and modified the value to be the new one
  }

	const handleSubmit = (event) => {
    event.preventDefault() //prevent reload page

    if (!amount) { //if there is no amount send an alert to pls add an amount
      alert('Please enter an amount')
      return
    }

    props.onSubmit(amount) //this is a function called from the parent app.jsx that is sended as a props to the child
  }

  return (
    <form
      className='h-100 w-full flex items-center justify-center font-sans'
      onSubmit={handleSubmit}>
      <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
        <div className='mb-4'>
          <h1 className='text-grey-darkest'>Enter a new bill</h1>
          <div className='flex mt-4'>
            <span className='mt-2 mr-1'>$</span>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
              placeholder='Add category'
              value={amount}
              onChange={handleChangeAmount}
            />
            <select onChange={(event) => setCategory(event.target.value)}> {/* on change gonna purt the  */}
              {props.categories
                ? props.categories.map((value, index) => { //if we have a categorie, gonna map each value and return each one as a option to pick
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    )
                  })
                : ''} {/* if there is no category on categories, just will show a blank space */}
            </select>
            <div className='mt-2 ml-1'>
              <DatePicker selected={date} onChange={handleChangeDate} />
            </div>
            <button className='flex-no-shrink p-2 border-2 rounded bg-teal bg-green-500 text-white border-teal hover:text-white hover:bg-teal'>
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddBill