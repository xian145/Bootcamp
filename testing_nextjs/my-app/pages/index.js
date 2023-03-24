import Link from 'next/link' //this works as '<a></a>' but is harder, better, faster, stronger

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">New index in blog</Link><br />
      <Link href="/blog/newblog">New blog</Link>
    </div>
  )
}