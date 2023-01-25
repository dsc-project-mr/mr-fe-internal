import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import type { NextPageWithLayout } from './_app'
import CenteredThemeBackground from 'components/CenteredThemeBackground'
import Link from 'next/link'
import Alert from '@mui/material/Alert'

const Login: NextPageWithLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField sx={{ marginTop: 12 }} id="email" label="Email Address" />
      <TextField
        sx={{ marginTop: 3, marginBottom: 2 }}
        id="password"
        label="Password"
        type="password"
      />
      <Link href="/ForgotPassword">Forget Password?</Link>
      <Button sx={{ marginTop: 3 }} variant="contained">
        SIGN IN
      </Button>
      <Alert sx={{ marginTop: 3 }} severity="error">
        <Typography variant="subtitle2" fontWeight="bold">
          Login Failed!
        </Typography>
        <Typography variant="body2">
          Email address/password not found
        </Typography>
      </Alert>
    </Box>
  )
}

Login.getLayout = (page) => {
  return <CenteredThemeBackground>{page}</CenteredThemeBackground>
}

export default Login
