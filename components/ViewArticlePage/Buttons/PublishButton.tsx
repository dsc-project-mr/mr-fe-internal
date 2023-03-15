import { Button } from '@mui/material'
import { putContent } from 'apis/content/usePutContent'
import { AxiosError } from 'axios'
import { ContentState } from 'constants/content'
import { Article } from 'models/article'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { KeyedMutator } from 'swr'
import ActionPopup from './ActionPopup'

const PublishButton = ({
  article_id,
  article_title,
  refetchArticle,
}: {
  article_id: string
  article_title: string
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
      state: ContentState.PUBLISHED,
    })
      .then((response) => {
        enqueueSnackbar('Article published successfully', {
          variant: 'success',
        })
        refetchArticle(response.data)
      })
      .catch((e: AxiosError) => {
        enqueueSnackbar(`Failed to publish article: ${e.message}`, {
          variant: 'error',
        })
      })
    setOpen(false)
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        PUBLISH
      </Button>
      <ActionPopup
        title="Publish Article?"
        desc={'Publish article titled ' + article_title + ' ?'}
        action="PUBLISH"
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
      />
    </>
  )
}

export default PublishButton
