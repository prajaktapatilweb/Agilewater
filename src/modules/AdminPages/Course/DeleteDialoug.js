import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

export default function DeleteDialoug({DD, CourseID}) {
  console.log('0sdsd', DD);
  const [open, setOpen] = React.useState(DD);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{color: 'white', backgroundColor: `${dialogaction}`}}>
          <h2>
            DeleteDialoug {CourseID}
            Form submission {dialogaction === 'red' ? 'Failed' : 'Success'}
          </h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mt: 5}}>{msg} Thank you !</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteDialoug.propTypes = {
  CourseID: PropTypes.string,
  DD: PropTypes.boolean,
};
