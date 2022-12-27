import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import CreateNewCampaign from 'components/CreateNewCampaign'

/*
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <CreateNewCampaign />
    </Layout>
  )
}

export default MyApp