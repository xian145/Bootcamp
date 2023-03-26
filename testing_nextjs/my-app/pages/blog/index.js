import posts from 'posts.json' //import the info inside of posts
import Link from 'next/link' //so we can use Link

export default function Index() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>{/* will make a list with */}
        {Object.keys(posts).map((id, index) => { //Object.key(posts) return an array with the keys of an object, then with .map, run through each element and return an item list with the associated index
          return <li key={index}>
            <Link href={`/blog/${id}`}>{posts[id].title}</Link> {/* id is the name of the key of the json object */}
          </li>
        })}
        <Link href='/blog/xd'>This post actually dosent exist will create it anyway</Link>
      </ul>
    </div>
  )
}