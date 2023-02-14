import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

type Props = {
  name : string;
}

const CreateButton: React.FC<Props> = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div>
        <Button variant="contained" onClick={handleClickOpen}>
          CREATE
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" variant="h5" sx={styledDialogTitle}>
            Create New User
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure that you would like to create this new user <span style={{fontWeight: 700}}>{props.name}</span> ?
              The email cannot be changed after creation. 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default CreateButton; 

const styledDialogTitle = {
  fontWeight : 700
}