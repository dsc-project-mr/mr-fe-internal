import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      preventDuplicate
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnackbarProvider>
  )
}

export default MyApp
