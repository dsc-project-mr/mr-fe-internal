import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import type { NextPageWithLayout } from './_app'
import CenteredThemeBackground from 'components/CenteredThemeBackground'

const ResetPassword: NextPageWithLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{ marginTop: 3, marginBottom: 1 }}
        variant="subtitle1"
        fontWeight="bold"
      >
        Reset Password
      </Typography>
      <TextField
        sx={{ marginTop: 2 }}
        id="new-password"
        label="New Password"
        type="password"
      />
      <TextField
        sx={{ marginTop: 2 }}
        id="confirm-new-password"
        label="Confirm New Password"
        type="password"
      />
      <Button sx={{ marginTop: 2 }} variant="contained">
        Reset Password
      </Button>
    </Box>
  )
}

ResetPassword.getLayout = (page) => {
  return <CenteredThemeBackground>{page}</CenteredThemeBackground>
}

export default ResetPassword
