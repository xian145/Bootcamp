function Form(props) {
  return (
    <form className='w-full max-w-sm mx-auto'> {/* width all, max width and adapt for font size, center the container */}
      <div className='mt-10 flex'> {/* margin top 10 and flex */}
        <input
          name='username'
          required
          className='form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        /> {/* form input, is a block, width all, padding en Y axis 2, padding on X axis 3, with border, border gray, rounded corners, with shadow, on focus outline none, on focues shadow change to blue, on focus border change blue */}
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