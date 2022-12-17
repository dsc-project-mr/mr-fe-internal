import { Button } from '@mui/material'
import { useState } from 'react'
import ActionPopup from './ActionPopup'

const PublishButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        PUBLISH
      </Button>
      <ActionPopup
        title="Publish Article?"
        desc="Publish article titled Disaster Relief for XXX ?"
        action="PUBLISH"
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}

export default PublishButton
