import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import CreateNewUserAccount from './CreateNewUserAccount/CreateNewUserAccount'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <CreateNewUserAccount />
    </Layout>
  )
}

export default MyApp
