import {
  Alert,
  AlertProps,
  AlertTitle,
  IconButton,
  Slide,
  SlideProps,
  Snackbar,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'

type TransitionProps = Omit<SlideProps, 'direction'>

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />
}

type FeedbackPopupProps = AlertProps & {
  isOpen: boolean
  title: string
  desc: string
}

const FeedbackPopup = (props: FeedbackPopupProps) => {
  const [open, setOpen] = useState<boolean>()

  useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={TransitionLeft}
        onClose={handleClose}
      >
        <Alert
          action={
            <IconButton aria-label="close" size="small" onClick={handleClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={props.severity}
          sx={{
            minWidth: '250px',
            ...props,
          }}
        >
          <AlertTitle>{props.title}</AlertTitle>
          {props.desc}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default FeedbackPopup
