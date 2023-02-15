import * as React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { postUser } from 'apis/user/postUser'
import { useSnackbar } from 'notistack'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'

type Props = {
  name: string
  email: string
  role: string
  isCompleted: boolean
}

// TODO: Move this to .env file
const DEFAULT_PASSWORD = 'password123!'

const CreateButton: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setOpen(false)
    postUser({
      name: props.name,
      email: props.email,
      role: props.role,
      password: DEFAULT_PASSWORD,
      passwordConfirm: DEFAULT_PASSWORD,
    })
      .then(() => {
        router.push('/users')
        enqueueSnackbar('User created successfully', {
          variant: 'success',
        })
      })
      .catch((e: AxiosError) => {
        enqueueSnackbar(`Failed to create user: ${e.message}`, {
          variant: 'error',
        })
      })
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        disabled={props.isCompleted ? false : true}
      >
        CREATE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h5"
          sx={styledDialogTitle}
        >
          Create New User
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you would like to create this new user{' '}
            <span style={{ fontWeight: 700 }}>{props.name}</span> ? The email
            cannot be changed after creation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CreateButton

const styledDialogTitle = {
  fontWeight: 700,
}
