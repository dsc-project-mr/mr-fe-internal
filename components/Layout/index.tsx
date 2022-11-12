import Head from 'next/head'
import styles from './index.module.scss'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Sidebar from 'components/Sidebar'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item>
                <Sidebar />
              </Grid>
              <Grid
                item
                sx={{
                  margin: '0 24px',
                  height: '100vh',
                }}
              >
                <Grid container columnSpacing={'16px'}>
                  {children}
                  {/* {[0, 1, 2].map((value) => (
                    <Grid key={value} item>
                      <Paper
                        sx={{
                          height: 140,
                          width: 100,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                      />
                    </Grid>
                  ))} */}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default Layout
