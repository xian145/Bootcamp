import { useRouter } from 'next/router' //import useRouter so we can handle the dynamic URLs
import posts from 'posts.json'

function blogPost() {
  const router = useRouter() //to initiate router
  const post = posts[router.query.id] //we are looking in the URL for the id, so the user enter that value in the navBar of the browser, after getting the id, the program know what post will render

  if (!post) return <p></p>

  return (
    <>
      <h1>
        {post.title}{/* post is imported from posts.json from the root of the project, title is a property */}
      </h1>
      <p>
        {post.content}{/* content is a property from posts.json */}
      </p>
    </>
  )
}

export default blogPost