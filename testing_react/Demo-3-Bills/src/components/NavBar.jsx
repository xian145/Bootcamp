function NavBar(props) {
  const setNewActiveCategory = index => {
    props.setNewActiveCategory(index)
  } //this will call the function passed from the parent and send the index of the category

  const liStyle = 'p-4 hover:bg-gray-200 uppercase font-black cursor-pointer'
  const buttonStyle = 'p-4 inline hover:bg-green-200 uppercase font-black cursor-pointer'

  return (
    <ul className='flex justify-center border-b-4 mb-0'> {/* we return a list */}
      {props.categories 
      ? props.categories.map((value, index) => {
        return <li key={index}
        className={liStyle +
                  (props.activeCategory === index //if the active category is iqual to the index of this category will change the bg color to dark gray
                    ? ' bg-gray-dark'
                    : ' bg-gray-lighter')}
        onClick={() => setNewActiveCategory(value)}
        >{value}</li> //if its something in props.categories gonna make a list item for each value and give a key with the index of the item to each list item
      })
      : '<li>No categories</li>' //if there is nothing in the props.categories gonna make a list item with 'no categories'
      }
      <li onClick={props.showAddCategory}
      className={buttonStyle}
      >+</li> {/* when pressed add a value in categories array */}
    </ul>
  )
}

export default NavBar