import { Button } from '@mui/material'
import { useState } from 'react'
import ActionPopup from './ActionPopup'

const DeleteButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        DELETE
      </Button>
      <ActionPopup
        title="Delete Article?"
        desc="Note: Article CANNOT be recovered after deletion."
        action="DELETE"
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}

export default DeleteButton
