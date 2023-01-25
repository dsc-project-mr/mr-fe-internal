import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { ReactNode, useState } from 'react'
import Person from '@mui/icons-material/Person'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Lock from '@mui/icons-material/Lock'
import Container from '@mui/material/Container'

const Account = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* TODO Prefill based on Account information */}
      <Box component="img" src="unlinked"></Box>
      <TextField sx={{ marginTop: 2 }} label="Full Name" />
      <TextField sx={{ marginTop: 2 }} label="Email Address" />
      <Button sx={{ marginTop: 2, alignSelf: 'end' }} variant="contained">
        Save Changes
      </Button>
    </Box>
  )
}

const ChangePassword = () => {
  return (
    <Box>
      <Button sx={{ marginTop: 2 }} variant="contained">
        Request for password reset
      </Button>
      <Alert sx={{ marginTop: 2 }} severity="info">
        A reset link has been sent to your email!
      </Alert>
    </Box>
  )
}

interface IconTextProps {
  icon: ReactNode
  text: string
}

const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon}
      <Box sx={{ marginLeft: 1 }}>{text}</Box>
    </Box>
  )
}

const Settings: NextPage = () => {
  const [value, setValue] = useState(0)
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Box sx={{ flex: 1, paddingTop: 20, margin: 'auto 0' }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)}>
          <Tab label={<IconText icon={<Person />} text="Account" />} />
          <Tab label={<IconText icon={<Lock />} text="Change Password" />} />
        </Tabs>
        <Box hidden={value !== 0}>
          <Account />
        </Box>
        <Box hidden={value !== 1}>
          <ChangePassword />
        </Box>
      </Box>
    </Container>
  )
}

export default Settings
