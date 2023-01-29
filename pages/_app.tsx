import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  )
}

export default MyApp
