import { Button } from '@mui/material'
import { useState } from 'react'
import ActionPopup from './ActionPopup'

const ArchiveButton = () => {
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
        ARCHIVE
      </Button>
      <ActionPopup
        title="Archive Article?"
        desc="Article will not be permanently deleted."
        action="ARCHIVE"
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}

export default ArchiveButton
