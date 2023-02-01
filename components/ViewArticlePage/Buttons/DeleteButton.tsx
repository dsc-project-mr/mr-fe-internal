import { Button } from '@mui/material'
import { deleteContent } from 'apis/content/useDeleteContent'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ActionPopup from './ActionPopup'

const DeleteButton = ({ article_id }: { article_id: string }) => {
  const [open, setOpen] = useState<boolean>(false)

  const router = useRouter()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAction = () => {
    deleteContent(article_id)
      .then(() => {
        router.push('/content/articles')
      })
      .catch((e) => {
        console.log(e)
      })
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
        handleAction={handleAction}
      />
    </>
  )
}

export default DeleteButton
