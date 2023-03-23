import React from 'react'

function BillsTable(props) {
  const triggerShowAddBill = () => {
    props.showAddBill()
  }

  const removeBill = (index) => {
    props.removeBill(index)
  }

  return (
    <table className="table w-full">
      <thead className="text-left">{/* used to group table headers */}
        <tr>{/* table row */}
          <th scope="col">Date</th>{/* table head */}
          <th scope="col">Amount</th>{/* table head */}
          <th scope="col">Category</th>{/* table head */}
          <th scope="col" />{/* table head */}
        </tr>
      </thead>
      <tbody>
        {props.bills?.map((value, index)=>{ //its something in bills? then map the content and return a table row with the next information on it
          return (
            <tr className="p4" key={index}>{/* this key is unique to each element, bring from index */}
              <td>{new Date(value.date).toLocaleDateString()}</td>{/* the date when created, with .toLocaleDateString() convert from machine type to a human string type */}
              <td>${value.amount}</td>{/* the amount to pay */}
              <td>{value.category}</td>{/* the category realated */}
              <td><button 
              className='border-solid rounded-lg p-4 border-2 hover:bg-red-200'
              onClick={() => removeBill(index)}>x</button></td>{/* this will remove a bill, calling a function that will pass the index value, which is unique to each elemnt */}
            </tr>
          )
        })}
        <tr>
          <td colSpan='4' className='text-center pt-5'>
            <button className='underline' onClick={triggerShowAddBill}>
              Add Bill
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BillsTable