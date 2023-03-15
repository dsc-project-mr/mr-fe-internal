import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

const ActionPopup = ({
  title,
  desc,
  action,
  open,
  handleClose,
  handleAction,
}: {
  title: string
  desc: string
  action: string
  open: boolean
  handleClose: () => void
  handleAction: () => void
}) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle fontSize={21} fontWeight={700} sx={{ width: '600px' }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText fontSize={16} color="rgba(0, 0, 0, 0.87);">
            {desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAction} autoFocus>
            {action}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ActionPopup
