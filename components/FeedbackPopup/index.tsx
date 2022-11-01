import { Alert, AlertColor, AlertTitle, IconButton, Zoom } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const FeedbackPopup = ({
  open,
  setOpen,
  title,
  desc,
  severity,
}: {
  open: boolean
  setOpen: Function
  title: string
  desc: string
  severity: AlertColor
}) => {
  return (
    <div>
      <Zoom in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={severity}
          sx={{ mb: 2, width: '50%', position: 'absolute', right: '25px' }}
        >
          <AlertTitle>{title}</AlertTitle>
          {desc}
        </Alert>
      </Zoom>
    </div>
  )
}

export default FeedbackPopup
