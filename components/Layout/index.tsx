import Head from 'next/head'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Sidebar from 'components/Sidebar'
import { Box } from '@mui/system'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Mercy Relief Internal Portal</title>
        <meta charSet="utf-8" />
        <meta
          name="decription"
          content="Mercy Relief Internal Management Portal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: 'flex',
              height: '100vh',
              width: `100vw`,
            }}
          >
            <CssBaseline />
            <Sidebar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                margin: '0 24px',
                height: '100%',
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </main>
    </div>
  )
}

export default Layout
