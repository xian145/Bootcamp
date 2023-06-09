import { useRouter } from 'next/router' //import useRouter so we can handle the dynamic URLs
import posts from 'posts.json'
import DogImage from '../clientdogs'

//this create URLs independent if the URLs actually exists or not, it wont be a 404 error, bc it generates the page always

function blogPost() {
  const router = useRouter() //to initiate router
  const post = posts[router.query.id] //we are looking in the URL for the id, so the user enter that value in the navBar of the browser, after getting the id, the program know what post will render

  if (!post) return <p>this page dont actually exists but it generate the URL thanks to [id].js</p> //thi if avoid an error, bc the when we load the page query start but will be an empty array if the front end is not loaded yet
//Now things should work. Initially the component is rendered without the dynamic router.query.id information. 
//After rendering, Next.js triggers an update with the query value and the page displays the correct information.
//Even if the props dosent exist will do all things without hessitate
  return (
    <>
      <h1>
        {post.title}{/* post is imported from posts.json from the root of the project, title is a property */}
      </h1>
      <p>
        {post.content}{/* content is a property from posts.json */}
      </p>
      <DogImage />{/* will render a random image of a dog in each blog post */}
    </>
  )
}

export default blogPost