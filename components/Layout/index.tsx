import Head from 'next/head'
import styles from './index.module.scss'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercy Relief Internal Portal</title>
        <meta charSet="utf-8" />
        <meta
          name="decription"
          content="Mercy Relief Internal Management Portal"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default Layout
