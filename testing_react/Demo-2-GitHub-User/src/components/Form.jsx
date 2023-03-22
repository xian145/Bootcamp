import { useState } from "react" //to modified states

function Form(props) {
  const [username, setUsername] = useState('') //the way we gonna change the state 'username'

  const handleSubmit = async (event) => { //this functions is called when you submit the form, gonna take that event and take the value of the username to fetch the information
    event.preventDefault() //dont reload the page

    const response = await fetch(`https://api.github.com/users/${username}`) //here use the input of the form
    if (response.status === 200){ //look if that username exists
      const data = await response.json()
      props.onSubmit(data) //this will pass to the parent the data we get from fetch
      setUsername('') //this will clear the username
    } else { //if not send an alert to the user
      alert('Username not Found')
    }
  }

  return (
    <form className='w-full max-w-sm mx-auto'
    onSubmit={handleSubmit}> {/* width all, max width and adapt for font size, center the container */}
    {/* on submit gonna call the funtion "handleSubmit" */}
      <div className='mt-10 flex'> {/* margin top 10 and flex */}
        <input
          name='username'
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className='form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        /> {/* form input, is a block, width all, padding en Y axis 2, padding on X axis 3, with border, border gray, rounded corners, with shadow, on focus outline none, on focues shadow change to blue, on focus border change blue */}
        {/* the input have a state named "username" (diferent to name='usename' this is a label) which will be used to use our API */}
        {/* we gonna look to any change on the input and take that change and put it in value (that what onChange do) */}
        <button
          type='submit'
          className='ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
          Search
        </button> {/* margin left 2, padding on y 2, padding on x 3, with border, border gray, rounded corners, text small, space between lines 4, font bold, text color gray, hover text gray lighter, on focues outline dissapear, on focus border change to blue, on focues, shadow to blue, on active background color change gray, on active text change to gray */}
      </div>
    </form>
  )
}

export default Form