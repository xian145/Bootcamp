import { useRouter } from 'next/router' //import useRouter so we can handle the dynamic URLs

function blogPost() {
  const router = useRouter() //to initiate router

  return (
    <>
      <h1>Blog post</h1>
      <p>Post id: {router.query.id}</p>{/* using router we can select using query the id, this will create a new page with the route we use in the URL and use it as 'id' */}
    {/* as we can saw, there's not a file with the name of the route we search in the navbar, but if we search in the URL a file that actually exist it will rendere it with any issue */}
    </>
  )
}

export default blogPost