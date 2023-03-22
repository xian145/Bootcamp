function NavBar(props) {
  return (
    <ul> {/* we return a list */}
      {props.categories 
      ? props.categories.map((value, index) => {
        return <li key={index}>{value}</li> //if its something in props.categories gonna make a list item for each value and give a key with the index of the item to each list item
      })
      : '<li>No categories</li>' //if there is nothing in the props.categories gonna make a list item with 'no categories'
      }
      <li onClick={props.showAddCategory}>+</li> {/* when pressed add a value in categories array */}
    </ul>
  )
}

export default NavBar