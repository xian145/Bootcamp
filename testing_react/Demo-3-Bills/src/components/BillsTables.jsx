import React from 'react'

function BillsTable(props) {
  return (
    <table className="table w-full">
      <thead className="text-left"> {/* used to group table headers */}
        <tr> {/* table row */}
          <th scope="col">Date</th> {/* table head */}
          <th scope="col">Amount</th> {/* table head */}
          <th scope="col">Category</th> {/* table head */}
          <th scope="col" /> {/* table head */}
        </tr>
      </thead>
      <tbody>
        {props.bills?.map((value, index) => { //its something in bills? then map the content and return a table row with the next information on it
          return (
            <tr className="p4" key={index}> {/* this key is unique to each element, bring from index */}
              <td>{value.date}</td> {/* the date created */}
              <td>${value.amount}</td> {/* the amount to pay */}
              <td>{value.category}</td> {/* the category realated */}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BillsTable