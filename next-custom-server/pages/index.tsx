import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/a" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          <a>b</a>
        </Link>
      </li>
      <li>
        <a href="/dashboard">dashboard (SPA)</a>
      </li>
      <li>
        <a href="/api">REST API</a>
      </li>
    </ul>
  )
}
