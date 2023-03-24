import Link from 'next/link' //this works as '<a></a>' but is harder, better, faster, stronger

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link><br />
      <Link href="/new">New index</Link><br />
      <Link href="/new/newblog">New blog</Link>
    </div>
  )
}