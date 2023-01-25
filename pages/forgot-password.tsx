import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import type { NextPageWithLayout } from './_app'
import CenteredThemeBackground from 'components/CenteredThemeBackground'

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{ marginTop: 3, marginBottom: 1, alignSelf: 'center' }}
        variant="subtitle1"
        fontWeight="bold"
      >
        Request for Password Reset
      </Typography>
      <TextField
        sx={{ marginTop: 2 }}
        id="email"
        label="Email Address"
        type="email"
      />
      <Button sx={{ marginTop: 2 }} variant="contained">
        Send Reset Link
      </Button>
    </Box>
  )
}

ForgotPassword.getLayout = (page) => {
  return <CenteredThemeBackground>{page}</CenteredThemeBackground>
}

export default ForgotPassword
