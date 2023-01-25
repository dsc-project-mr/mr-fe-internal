import Head from 'next/head'
import { Fragment, ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Sidebar, { DRAWER_WIDTH } from 'components/Sidebar'
import { Box } from '@mui/system'

type Props = {
  children: ReactNode
  enableSidebar?: boolean
}

const Layout = ({ children, enableSidebar }: Props) => {
  enableSidebar = enableSidebar ?? true

  const sidebarWithChildren = !enableSidebar ? (
    children
  ) : (
    <Fragment>
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
        {children}
      </Box>
    </Fragment>
  )

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
            {sidebarWithChildren}
          </Box>
        </ThemeProvider>
      </main>
    </div>
  )
}

export default Layout
