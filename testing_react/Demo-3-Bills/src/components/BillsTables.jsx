import { useState } from 'react'

function AddBill(props) {
  const [amount, setAmount] = useState(0)

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
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
              placeholder='Add an amount'
              value={amount}
              onChange={handleChangeAmount}
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

export default AddBill