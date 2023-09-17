import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import {Formik, Field, Form} from 'formik';
// import FormikRadioGroup from '../../formik/FormikRadioGroup';
// import CustomizedSelectFormik from '../../formik/CustomizedSelectFormik';
// import CustomizedCheckboxFormik from '../../formik/CustomizedCheckboxFormik';
import * as yup from 'yup';
import AppInfoView from '@crema/core/AppInfoView';
import Box from '@mui/material/Box';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
// import { useAuthUser } from '@crema/utility/AuthHooks';
// import CheckboxGroup from '../../formik/CheckboxGroup';
// import { useJWTAuth, userDefJWTRoleAuth, } from '@crema/services/auth/jwt-auth/JWTAuthProvider';
// import { userDefJWTRoleuser } from '@crema/utility/AuthHooks';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IntlMessages from '@crema/utility/IntlMessages';
import CircularProgress from '@mui/material/CircularProgress';
import {green} from '@mui/material/colors';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {
  CourseOptions,
  TitleOptions,
  TrainerList,
} from 'modules/Constant/CommanConst';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment';
import {DatePicker} from '@mui/lab';
import {
  onGetIndivCourseData,
  onPostNewCourseData,
  onUpdateCourseData,
} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import AppDialog from '@crema/core/AppDialog';
import EnquiryFormik from './EnquiryFormik';

// import Notistack from 'modules/Testing/Notistack';
// import ReactTostify from 'modules/Testing/ReactTostify';

// Yup Form Validation

const EnquiryForm = ({AllowedFieldArray}) => {
  console.log('sfsdfds1', AllowedFieldArray);

  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const [dialogaction, setDialogaction] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const toggleDialoguOpen = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(onGetIndivCourseData({CourseID}));
  //   }, [dispatch]);
  //   const CourseData = useSelector(
  //     (state) => state?.dashboard?.Coursedata?.CourseData,
  //   );
  //   console.log('Signup Form Submission', CourseData);

  // Varible for checkbox It is use to store the earlier field data
  // Form Submission Function

  return (
    <>
      <Button onClick={toggleDialoguOpen}> Click to register</Button>
      <AppDialog
        open={open}
        onClose={handleClose}
        title='Enquiry'
        fullHeight
        // actionTitle='Submit'
      >
        <EnquiryFormik AllowedFieldArray={AllowedFieldArray} />
      </AppDialog>
    </>
  );
};

export default EnquiryForm;

EnquiryForm.propTypes = {
  AllowedFieldArray: PropTypes.array,
};
