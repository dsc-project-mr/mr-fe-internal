import Link from 'next/link'
import styles from './index.module.scss'

const HomePage = () => (
  <>
    <h1>HOME</h1>
    <Link href="/">
      <a>Back to root</a>
    </Link>
    <div className={styles.homeDetails}>So many things</div>
    <div>This is HOME!</div>
  </>
)

export default HomePage
