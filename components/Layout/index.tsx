import Head from 'next/head'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Sidebar, { DRAWER_WIDTH } from 'components/Sidebar'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleClick = () => {
    enqueueSnackbar('I love hooks', {
      variant: 'error',
      persist: false,
      autoHideDuration: 1000,
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
      preventDuplicate: true,
    })
  }

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
                maxWidth: `calc(100vw - ${DRAWER_WIDTH}px - 48px)`,
              }}
            >
              <Button onClick={handleClick}>Click</Button>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </main>
    </div>
  )
}

export default Layout
