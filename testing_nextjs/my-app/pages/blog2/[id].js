import posts from 'posts.json' // to get the content and titles of posts.json

//this is diferent from the other blog, this does the same as blog but fectching data like we do in dog images

export default function BlogPost2({ post }) { //this will create the post with the information of posts.json
  return (
    <>
      <h1>{post.title}</h1>{/* title of the post */}
      <p>{post.content}</p>{/* content of the post */}
    </>
  )
}

export async function getStaticPaths() { //defines the URLs that the page allows, different as blog(1) this tell what urls exists and which dosent, it will pop an 404 error if dosent exist
  return {
    paths: Object.keys(posts).map((id) => ({ params: { id } })), //this are the paths allowed, obtain the key of the object and put it in an array and the mapp it
    fallback: false,
  }
}

export async function getStaticProps({ params }) { //this will create as a static props the content inside the of posts.json, so if dosent exist wont create an empty space
  return {
    props: { //props
      post: posts[params.id], //name of the prop -> post, that retrives information from "posts" and loof for the param "id"
    },
  }
}