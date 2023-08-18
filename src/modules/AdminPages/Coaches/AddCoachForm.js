import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import {
  Card,
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
import {Fonts} from '../../../shared/constants/AppEnums';
// import CheckboxGroup from '../../formik/CheckboxGroup';
// import { useJWTAuth, userDefJWTRoleAuth, } from '@crema/services/auth/jwt-auth/JWTAuthProvider';
// import { userDefJWTRoleuser } from '@crema/utility/AuthHooks';
import jwtAxios from '../../../@crema/services/auth/jwt-auth/index';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IntlMessages from '@crema/utility/IntlMessages';
import CircularProgress from '@mui/material/CircularProgress';
import {green} from '@mui/material/colors';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {CocheSubject} from 'modules/Constant/CommanConst';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment';
import {DatePicker} from '@mui/lab';
import {
  onGetIndivCoachData,
  onPostNewCoachData,
  onUpdateCoachData,
} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import CustomizedCheckboxFormik from 'modules/commanmodules/Formik/CustomizedCheckboxFormik';
import CustomizedFieldArray from 'modules/commanmodules/Formik/CustomizedFieldArray';
import ProfilePhoto from './ProfilePhoto';
import {useJWTAuthUser} from '@crema/utility/AuthHooks';

// import Notistack from 'modules/Testing/Notistack';
// import ReactTostify from 'modules/Testing/ReactTostify';

// Yup Form Validation
const validationSchema = yup.object({
  CoachName: yup.string().required(
    <>
      <IntlMessages id='Coach.Name' /> required !
    </>,
  ),
  Experience: yup
    .string()
    .required(
      <>
        <IntlMessages id='Coach.experience' /> required !
      </>,
    )
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field '),

  Country: yup
    .string()
    .required(
      <>
        <IntlMessages id='Coach.country' /> required !
      </>,
    )
    .matches(/^[aA-zZ]+$/, 'Only alphabets are allowed for this field '),

  Avatar: yup.string().required(
    <>
      <IntlMessages id='Coach.photo' /> required !
    </>,
  ),
  Specialization: yup.array().of(
    yup.string().required(
      <>
        <IntlMessages id='Coach.Specil' /> required !
      </>,
    ),
  ),
  Expertise: yup
    .array()
    .min(1, 'Please select at least select one Expertise Field')
    .required(
      <>
        <IntlMessages id='Coach.expertise' /> required !
      </>,
    ),
});

const AddCoachForm = ({CoachData, closefn}) => {
  // console.log('Begining of SignupJWTAuth');
  // const {user} = useJWTAuthUser();
  // console.log('sds bnnnnn', user);

  // Varibles and Function for alert dialogue
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const [dialogaction, setDialogaction] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const [checked, setChecked] = React.useState('');
  const CoachID = CoachData ? CoachData?.CoachID : null;
  const dispatch = useDispatch();

  console.log('Signup Form Submission', CoachData);

  // Varible for checkbox It is use to store the earlier field data
  // Form Submission Function
  const onSubmit = async (data, {setSubmitting, resetForm}) => {
    console.log('Signup Form Submission', data);
    setSubmitting(true);
    const formData = new FormData();
    for (let value in data) {
      console.log('FormData', typeof data[value], data[value]);
      if (value === 'Specialization' || value === 'Expertise') {
        for (let value2 in data[value]) {
          console.log('FormData2', value2, data[value][value2]);
          value === 'Specialization'
            ? formData.append('Specialization[]', data[value][value2])
            : formData.append('Expertise[]', data[value][value2]);
        }
      } else formData.append(value, data[value]);
    }
    console.log(formData.getAll('Specialization[]'));
    console.log(formData.getAll('[Expertise]'));
    //TODO Api Call here to save user info
    // formData.append('ImgFileData', data.Avatar);
    // formData.append('AllData', data);
    // const tmpe = formData.get('ImgFileData');
    // jwtAxios.put(`coaches/photo/ID-4`, formData)
    // jwtAxios.post(`coaches/formdata`, data)

    CoachID
      ? dispatch(onUpdateCoachData({CoachID, formData}))
      : dispatch(onPostNewCoachData({formData, resetForm}));
    CoachID ? closefn() : null;
    Router.push('/adminpages/coaches/list');
    setSubmitting(false);
  };
  const initialValues = {
    CoachName: CoachData?.CoachName || '',
    Experience: CoachData?.Experience || '',
    Expertise: CoachData?.Expertise || '',
    Specialization: CoachData?.Specialization || [''],
    Country: CoachData?.Country || '',
    Avatar: CoachData?.Avatar || '',
    photoURL: CoachData?.photoURL
      ? `/userFileUploads/${CoachData?.photoURL}`
      : '/assets/images/placeholder.jpg',
  };

  return (
    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      {/* {CoachID ? (
        <Typography variant='h1'>Update the data of {CoachID}</Typography>
      ) : null} */}
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', m: 10}}>
        {/* <Grid container sx={{mb: {xs: 4, xl: 5}}} spacing={15}>
          <Grid item xs={12} sm={4}>
            <Card sx={{alignItems: 'center', p: {xs: 15, sm: 5, lg: 3}}}>
              <ProfilePhoto CoachData={CoachData} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}> */}
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          validateOnChange={true}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            isValidating,
            touched,
            setFieldValue,
            isSubmitting,
          }) => (
            // {/* {(data, errors, isValidating, isSubmitting) => ( */}
            <Form
              style={{textAlign: 'left'}}
              noValidate
              autoComplete='off'
              encType='multipart/form-data'
            >
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              <Grid container sx={{mb: {xs: 4, xl: 5}}} spacing={15}>
                <Grid item xs={12} sm={4}>
                  <Card sx={{alignItems: 'center', p: {xs: 15, sm: 5, lg: 3}}}>
                    {/* <ProfilePhoto CoachData={CoachData} /> */}
                    <FormControl sx={{width: '100%'}}>
                      <InputLabel id='demo-simple-select-label'>
                        <IntlMessages id='Course.trainer' />
                      </InputLabel>
                      <Field name='Avatar' component={ProfilePhoto} />
                    </FormControl>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <AppTextField
                        label={<IntlMessages id='Coach.Name' />}
                        disabled={values.isSubmitting}
                        name='CoachName'
                        variant='outlined'
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <AppTextField
                        label={<IntlMessages id='Coach.experience' />}
                        disabled={values.isSubmitting}
                        // name='Cost.Actual'
                        name='Experience'
                        variant='outlined'
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <AppTextField
                        label={<IntlMessages id='Coach.country' />}
                        disabled={values.isSubmitting}
                        // name='Cost.Actual'
                        name='Country'
                        variant='outlined'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          // mb: {xs: 3, xl: 4},
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          fontSize: 16,
                          ml: 2,
                        }}
                      >
                        <IntlMessages id='Coach.expertise' />
                      </Box>
                      <Box
                        sx={{
                          mb: {xs: 3, xl: 4},
                          display: 'flex',
                          alignItems: 'center',
                          ml: 4,
                        }}
                      >
                        <FormControl>
                          <Field
                            name='Expertise'
                            options={CocheSubject}
                            olddata=''
                            checked={checked}
                            disabled={values.isSubmitting}
                            setChecked={setChecked}
                            component={CustomizedCheckboxFormik}
                          ></Field>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      {/* Specialization Array */}
                      <CustomizedFieldArray
                        arrayName='Specialization'
                        fieldName='Coach.Specil'
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Button
                      variant='contained'
                      color='primary'
                      disabled={values.isValidating || values.isSubmitting}
                      sx={{
                        mt: {xs: 5, xl: 6},
                        minWidth: 160,
                        fontWeight: Fonts.REGULAR,
                        fontSize: 16,
                        textTransform: 'capitalize',
                        padding: '8px 16px 8px',
                      }}
                      type='submit'
                    >
                      Submit
                    </Button>
                  </Grid>
                  {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        {/* </Grid>
        </Grid> */}
      </Box>

      <Box sx={{color: 'grey.500'}}></Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{color: 'white', backgroundColor: `${dialogaction}`}}>
          <h2>
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
      <AppInfoView />
    </Box>
  );
};

export default AddCoachForm;

AddCoachForm.propTypes = {
  CoachData: PropTypes.object,
  closefn: PropTypes.function,
};
