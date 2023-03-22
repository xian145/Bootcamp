function NavBar(props) {
  return (
    <ul className='flex justify-center border-b-4 mb-0'> {/* we return a list */}
      {props.categories 
      ? props.categories.map((value, index) => {
        return <li key={index}
        className='p-4 hover:bg-gray-200 uppercase font-black cursor-pointer'
        >{value}</li> //if its something in props.categories gonna make a list item for each value and give a key with the index of the item to each list item
      })
      : '<li>No categories</li>' //if there is nothing in the props.categories gonna make a list item with 'no categories'
      }
      <li onClick={props.showAddCategory}
      className='p-4 inline hover:bg-green-200 uppercase font-black cursor-pointer'
      >+</li> {/* when pressed add a value in categories array */}
    </ul>
  )
}

export default NavBar