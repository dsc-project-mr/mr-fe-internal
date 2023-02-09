import { Button } from '@mui/material'
import { putContent } from 'apis/content/usePutContent'
import { AxiosError } from 'axios'
import { ContentState } from 'constants/content'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import ActionPopup from './ActionPopup'

const ArchiveButton = ({ article_id }: { article_id: string }) => {
  const [open, setOpen] = useState<boolean>(false)

  const { enqueueSnackbar } = useSnackbar()

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
      .then(() => {
        enqueueSnackbar('Article archived successfully', {
          variant: 'success',
        })
      })
      .catch((e: AxiosError) => {
        enqueueSnackbar(
          // Update to use backend's Error response schema
          `Failed to archive article: ${e.message}`,
          {
            variant: 'error',
          }
        )
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
