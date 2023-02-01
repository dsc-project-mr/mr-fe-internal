import { Button } from '@mui/material'
import { putContent } from 'apis/content/usePutContent'
import { ContentState } from 'constants/Content'
import { useState } from 'react'
import ActionPopup from './ActionPopup'

const ArchiveButton = ({ article_id }: { article_id: string }) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAction = () => {
    putContent(article_id, {
      state: ContentState.ARCHIVED,
    })
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
        handleAction={handleAction}
      />
    </>
  )
}

export default ArchiveButton
