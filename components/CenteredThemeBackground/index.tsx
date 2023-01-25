import Box from '@mui/material/Box'
import Layout from 'components/Layout'
import { ReactNode } from 'react'
import mr_logo from 'public/images/sidebar/mercy_relief_logo.png'
import { MR_GRAY_1 } from 'styles/theme'

type CenteredThemeBackgroundProps = {
  children: ReactNode
}

// TODO get actual image
const BACKGROUND_IMAGE = 'red'

function CenteredThemeBackground({ children }: CenteredThemeBackgroundProps) {
  return (
    <Layout enableSidebar={false}>
      <Box sx={{ display: 'flex', flex: 1, background: BACKGROUND_IMAGE }}>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            margin: 'auto',
            maxWidth: 500,
            paddingRight: { sm: 8, xs: 2 },
            paddingLeft: { sm: 8, xs: 2 },
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: { sm: 4, xs: 0 },
            background: MR_GRAY_1,
          }}
        >
          <Box
            component="img"
            src={mr_logo.src}
            alt="Mercy Relief Logo"
            style={{ objectFit: 'fill', margin: 'auto', width: '50%' }}
          />
          {children}
        </Box>
      </Box>
    </Layout>
  )
}
3

export default CenteredThemeBackground
