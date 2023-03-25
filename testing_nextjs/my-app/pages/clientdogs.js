import { useState, useEffect } from 'react' //to modified states and use useEffect whe we render the page

export default function DogImage() { //defined the function as we do in react
  const [image, setImage] = useState(null) //to set the iamge content

  useEffect(() => {
    async function getData() { //can have any name, but this one is appropiated
	    const res = await fetch(
        `https://dog.ceo/api/breeds/image/random`) //fetching data
	    const data = await res.json() //parsing the data into json
	    setImage(data.message) //change image with setImage with the data fetched
		}
    getData() //execute the function
  }, []) //only execute the first time we render the page

  return (
    <img src={image} /> //render the image
  )
}
