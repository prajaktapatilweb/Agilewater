import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Formik, Field, Form } from 'formik';
// import FormikRadioGroup from '../../formik/FormikRadioGroup';
// import CustomizedSelectFormik from '../../formik/CustomizedSelectFormik';
// import CustomizedCheckboxFormik from '../../formik/CustomizedCheckboxFormik';
import * as yup from 'yup';
import AppInfoView from '@crema/core/AppInfoView';
import Box from '@mui/material/Box';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
// import { useAuthUser } from '@crema/utility/AuthHooks';
// import {Fonts} from 'shared/constants/AppEnums';
// import CheckboxGroup from '../../formik/CheckboxGroup';
// import { useJWTAuth, userDefJWTRoleAuth, } from '@crema/services/auth/jwt-auth/JWTAuthProvider';
// import { userDefJWTRoleuser } from '@crema/utility/AuthHooks';
import jwtAxios from '@crema/services/auth/jwt-auth/index';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IntlMessages from '@crema/utility/IntlMessages';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {
  CourseOptions,
  TitleOptions,
  TrainerList,
} from 'modules/Constant/CommanConst';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from 'moment';
import { DatePicker } from '@mui/lab';
import {
  onGetIndivCourseData,
  onPostNewCourseData,
  onUpdateCourseData,
} from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Fonts } from 'shared/constants/AppEnums';

const validationSchema = yup.object({
  CourseName: yup.string().required(
    <>
      <IntlMessages id='course' /> required !
    </>,
  ),
  Time: yup.string().required(
    <>
      <IntlMessages id='Course.time' /> required !
    </>,
  ),
  Place: yup.string().required(
    <>
      <IntlMessages id='Course.place' /> required !
    </>,
  ),
  Trainer: yup.string().required(
    <>
      <IntlMessages id='Course.trainer' /> required !
    </>,
  ),
  ActualCost: yup.string().required(
    <>
      <IntlMessages id='Course.actualcost' /> required !
    </>,
  ),
  DiscountedCost: yup.string().required(
    <>
      <IntlMessages id='Course.discost' /> required !
    </>,
  ),
  StartDate: yup.date().required(
    <>
      <IntlMessages id='common.startDate' /> required !
    </>,
  ),
  // .max(new Date(), intl.formatMessage({ id: 'start_date.error.max' }))
  EndDate: yup
    .date()
    .required('It is required field')
    .when(['StartDate'], (StartDate, schema) => {
      return schema.test({
        test: (EndDate) => {
          if (!EndDate) return true;
          return EndDate >= StartDate;
        },
        message: 'Event Delete Date should be after the start date',
      });
    }),

  EventDeleteDate: yup
    .date()
    .required('It is required field')
    .when(['StartDate'], (StartDate, schema) => {
      return schema.test({
        test: (EventDeleteDate) => {
          if (!EventDeleteDate) return true;
          return EventDeleteDate >= StartDate;
        },
        message: 'Event Delete Date should be after the start date',
      });
    }),
});
export default function EnquiryFormik({ AllowedFieldArray }) {
  console.log('sfsdfds', AllowedFieldArray.includes('A'));
  const onSubmit = async (data, { setSubmitting, resetForm }) => {
    console.log('Signup Form Submission', data);
    setSubmitting(true);
    CourseID
      ? dispatch(onUpdateCourseData({ CourseID, data }))
      : dispatch(onPostNewCourseData({ data, resetForm }));
    CourseID ? closefn() : null;
    setSubmitting(false);
  };
  const initialValues = {
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Message: '',
    CourseName: '',
    StartDate: '',
    EndDate: '',
    Time: '9:30 am to 05:30 pm',
    ActualCost: '',
    DiscountedCost: '',
    Place: '',
    Trainer: '',
    EventDeleteDate: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
        <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <Grid container sx={{ mb: { xs: 4, xl: 5 } }} spacing={2}>
            <Grid item xs={12} md={6}>
              {AllowedFieldArray.includes('FirstName') && (
                <Grid item xs={6} md={12}>
                  <AppTextField
                    label='First Name'
                    disabled={values.isSubmitting}
                    // name='Cost.Actual'
                    name='FirstName'
                    variant='outlined'
                  />
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {AllowedFieldArray.includes('LastName') && (
                <Grid item xs={6} md={12}>
                  <AppTextField
                    label='Last Name'
                    disabled={values.isSubmitting}
                    // name='Cost.Actual'
                    name='LastName'
                    variant='outlined'
                  />
                </Grid>
              )}
              {/* <FormControl sx={{ width: '100%' }}>
                <InputLabel id='demo-simple-select-label'>
                  <IntlMessages id='course' />
                </InputLabel>
                <Field
                  name='CourseName'
                  options={CourseOptions}
                  component={CustomizedSelectFormik}
                  disabled={isSubmitting}
                />
              </FormControl> */}
            </Grid>
            <Grid item xs={12} md={6}>
              {AllowedFieldArray.includes('Email') && (
                <Grid item xs={6} md={12}>
                  <AppTextField
                    label='Email'
                    disabled={values.isSubmitting}
                    // name='Cost.Actual'
                    name='Email'
                    variant='outlined'
                  />
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {AllowedFieldArray.includes('Phone') && (
                <Grid item xs={6} md={12}>
                  <AppTextField
                    label='Phone'
                    disabled={values.isSubmitting}
                    // name='Cost.Actual'
                    name='Phone'
                    variant='outlined'
                  />
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              {AllowedFieldArray.includes('LastName') && (
                <Grid item xs={6} md={12}>
                  <AppTextField
                    fullWidth
                    multiline
                    label='Message'
                    disabled={values.isSubmitting}
                    name='Message'
                    rows='3'
                    variant='outlined'

                  />

                </Grid>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              {AllowedFieldArray.includes('Trainer') && (
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id='demo-simple-select-label'>
                    <IntlMessages id='Course.trainer' />
                  </InputLabel>
                  <Field
                    name='Trainer'
                    options={TrainerList}
                    component={CustomizedSelectFormik}
                    disabled={isSubmitting}
                  />
                </FormControl>
              )}
            </Grid>
            <Grid container justifyContent='space-between' spacing={2} p={2}>
              {/* <DateTimePicker
              autoOk
              format='YYYY/MM/DD'
              variant='inline'
              inputVariant='outlined'
              label={<IntlMessages id='common.startDate' />}
              name='StartDate'
              value={values.StartDate}
              renderInput={(params) => <TextField {...params} />}
              onChange={(value) => setFieldValue('StartDate', value)}
            /> */}
              {AllowedFieldArray.includes('StartDate') && (
                <Grid item>

                  <DatePicker
                    autoOk
                    format='YYYY/MM/DD'
                    variant='inline'
                    inputVariant='outlined'
                    label={<IntlMessages id='common.startDate' />}
                    name='StartDate'
                    value={values.StartDate}
                    slotProps={{
                      textField: {
                        helperText: 'MM/DD/YYYY',
                      },
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(value) =>
                      setFieldValue(
                        'StartDate',
                        value,
                        // moment.utc(value).format('YYYY/MM/DD'),
                      )
                    }
                  />
                  {errors.StartDate ? (
                    <Typography color='red'>{errors.StartDate}</Typography>
                  ) : (
                    <Typography>MM/DD/YYYY</Typography>
                  )}

                </Grid>
              )}
              {AllowedFieldArray.includes('EndDate') && (
                <Grid item>
                  <DatePicker
                    autoOk
                    format='YYYY/MM/DD'
                    variant='inline'
                    inputVariant='outlined'
                    label={<IntlMessages id='common.endDate' />}
                    name='EndDate'
                    value={values.EndDate}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(value) =>
                      setFieldValue(
                        'EndDate',
                        value,
                        // moment(value).format('YYYY/MM/DD'),
                      )
                    }
                  />
                  {errors.EndDate ? (
                    <Typography color='red'>{errors.EndDate}</Typography>
                  ) : (
                    <Typography>MM/DD/YYYY</Typography>
                  )}
                </Grid>
              )}
              {AllowedFieldArray.includes('delDate') && (
                <Grid item>
                  <DatePicker
                    autoOk
                    format='YYYY/MM/DD'
                    variant='inline'
                    inputVariant='outlined'
                    label={<IntlMessages id='common.delDate' />}
                    name='EventDeleteDate'
                    value={values.EventDeleteDate}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(value) =>
                      setFieldValue(
                        'EventDeleteDate',
                        value,
                        // moment(value).format('YYYY/MM/DD'),
                      )
                    }
                  />
                  {errors.EventDeleteDate ? (
                    <Typography color='red'>{errors.EventDeleteDate}</Typography>
                  ) : (
                    <Typography>MM/DD/YYYY</Typography>
                  )}
                </Grid>
              )}
            </Grid>
            {/* <Grid continer  direction="row" xs={12}  justifyContent="space-evenly"> */}
            {/* <Grid item md={6} xs={12}>

            <Typography variant='h4' sx={{my: 3}}>
              The Demo Lecture is scheduled on :
              <strong>
                {moment(values.StartDate).format(
                  'ddd, DD MMM YYYY @ HH:mm',
                )}
              </strong>
            </Typography>
          </Grid> */}
            {AllowedFieldArray.includes('Aa') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.actualcost' />}
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='ActualCost'
                  variant='outlined'
                />
              </Grid>
            )}
            {AllowedFieldArray.includes('A') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.discost' />}
                  name='DiscountedCost'
                  // name='`Cost`.Discounted'
                  disabled={values.isSubmitting}
                  variant='outlined'
                />
              </Grid>
            )}
            {AllowedFieldArray.includes('Time') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.time' />}
                  disabled={values.isSubmitting}
                  name='Time'
                  variant='outlined'
                />
              </Grid>
            )}
            {AllowedFieldArray.includes('Place') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.place' />}
                  disabled={values.isSubmitting}
                  name='Place'
                  variant='outlined'
                  sx={{
                    width: '100%',
                    '& .MuiInputBase-input': {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>
            )}
          </Grid>
          <Grid container>
            <Button
              variant='contained'
              color='primary'
              disabled={values.isValidating || values.isSubmitting}
              sx={{
                mt: { xs: 5, xl: 6 },
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
          {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}

EnquiryFormik.propTypes = {
  AllowedFieldArray: PropTypes.array,
};
