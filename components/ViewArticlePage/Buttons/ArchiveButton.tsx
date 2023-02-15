import { Button } from '@mui/material'
import { putContent } from 'apis/content/usePutContent'
import { AxiosError } from 'axios'
import { ContentState } from 'constants/content'
import { Article } from 'models/article'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { KeyedMutator } from 'swr'
import ActionPopup from './ActionPopup'

const ArchiveButton = ({
  article_id,
  refetchArticle,
}: {
  article_id: string
  refetchArticle: KeyedMutator<Article>
}) => {
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
      .then((response) => {
        enqueueSnackbar('Article archived successfully', {
          variant: 'success',
        })
        refetchArticle(response.data)
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
