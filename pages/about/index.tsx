import Link from 'next/link'

const AboutPage = () => (
  <>
    <h1>About Page</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Back to root</a>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <a>Home page</a>
        </Link>
      </li>
    </ul>
  </>
)

export default AboutPage
