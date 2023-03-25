export default function DogImage({ image }) {
  return (
    <img src={image} />
  )
} //component that render the image

export async function getServerSideProps() { //this is a Next.js feature, this function has the task of fetching data and returning it as an object in props
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`) //same as we fetch previously
  const data = await res.json() //parse the data feteched into json and saved in data
  return {
    props: { 
			image: data.message //we named the prop as image, but can have any name (data.message is the way the API works)
		}
  }
} //This function is only defined inside of this page, so if i want to use this in other page, i need to add this function on each file