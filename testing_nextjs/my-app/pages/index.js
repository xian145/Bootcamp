import Link from 'next/link' //this works as '<a></a>' but is harder, better, faster, stronger

export default function Home() {
  return (
    <div>
      <h1 className='text-purple-500 font-sans font-black'>Home page</h1>
      <ul className='list-disc list-inside pl-4'>
        <li><Link href="/blog">New index in blog</Link></li>
        <li><Link href="/blog2">New index in blog 2.0</Link></li>
        <li><Link href="/clientdogs">API of random pic dogs, handled by cliente browser</Link></li>
        <li><Link href="/serverdogs">API of random pic dogs, handled by server</Link></li>
        <li><Link href="/blog/newblog">New blog</Link></li>
      </ul>
    </div>
  )
}