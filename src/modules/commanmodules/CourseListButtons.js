import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Button} from '@mui/material';
import AppDialog from '@crema/core/AppDialog';
import AddCourseForm from 'modules/AdminPages/Course/AddCourseForm';
import DeleteDialoug from 'modules/AdminPages/Course/DeleteDialoug';
import {useAuthUser} from '@crema/utility/AuthHooks';
import SigninFirebase from 'modules/auth/Signin/SigninFirebase';
import PaymentModule from './PaymentModule';
import {Edit} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CourseListButtons({
  ActionLabel,
  selectedRow,
  setSelectedRow,
  row,
}) {
  //   const [selectedRow, setSelectedRow] = useState();
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setisDeleteDialogOpen] = useState(false);
  const {user} = useAuthUser();
  const [LoginDialog, setLoginDialog] = useState(false);
  const toggleDialogOpen = () => {
    setisDialogOpen(!isDialogOpen);
    setSelectedRow();
  };
  const toggleDeleteDialogOpen = () => {
    setisDeleteDialogOpen(!isDeleteDialogOpen);
  };
  const toggleLoginDialog = () => {
    setLoginDialog(!LoginDialog);
  };
  return (
    <>
      {ActionLabel === 'Edit' ? (
        <Button
          variant='outlined'
          onClick={() => {
            setSelectedRow(row);
            setisDialogOpen(true);
          }}
          startIcon={<Edit />}
          color='primary'
        >
          Edit
        </Button>
      ) : ActionLabel === 'Delete' ? (
        <Button
          variant='outlined'
          onClick={() => {
            console.log('Clicked');
            setSelectedRow(row);
            setisDeleteDialogOpen(true);
            console.log('Clicked', isDeleteDialogOpen);
          }}
          startIcon={<DeleteIcon />}
          color='error'
        >
          Delete {row.CourseID}
        </Button>
      ) : (
        <Button
          variant='contained'
          sx={{
            backgroundImage:
              'linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)',
          }}
          onClick={() => {
            setSelectedRow(row);
            // user ? onClickFunction(btnQuizID) :
            setLoginDialog(true);

            // setisDialogOpen(true);
          }}
        >
          Register
        </Button>
      )}
      <AppDialog
        open={isDialogOpen}
        onClose={toggleDialogOpen}
        // title={`${ActionLabel}  for ${selectedRow?.CourseID}`}
      >
        <AddCourseForm
          CourseID={selectedRow?.CourseID}
          closefn={toggleDialogOpen}
        />
      </AppDialog>
      <AppDialog
        open={isDeleteDialogOpen}
        onClose={toggleDeleteDialogOpen}
        // title={`${ActionLabel}  for ${selectedRow?.CourseID}`}
      >
        <DeleteDialoug
          CourseID={selectedRow?.CourseID}
          closefn={toggleDeleteDialogOpen}
        />
      </AppDialog>
      <AppDialog open={LoginDialog} onClose={toggleLoginDialog}>
        {user ? <PaymentModule /> : <SigninFirebase />}
      </AppDialog>
    </>
  );
}

CourseListButtons.propTypes = {
  ActionLabel: PropTypes.string,
  selectedRow: PropTypes.object,
  setSelectedRow: PropTypes.func,
  row: PropTypes.object,
};
