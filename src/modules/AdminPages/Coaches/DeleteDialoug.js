import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import {onDeleteIndivCourseData} from 'redux/actions';
import {useDispatch} from 'react-redux';

export default function DeleteDialoug({CourseID, closefn}) {
  console.log('0sdsd');
  const dispatch = useDispatch();
  return (
    <>
      <DialogContent>
        <DialogContentText sx={{mt: 5}}>
          Do you really want to delete the course {CourseID}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={() => closefn()}>
          No
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={() =>
            dispatch(onDeleteIndivCourseData({CourseID}), closefn())
          }
        >
          Yes
        </Button>
      </DialogActions>
    </>
  );
}

DeleteDialoug.propTypes = {
  CourseID: PropTypes.string,
  closefn: PropTypes.func,
};
