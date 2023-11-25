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
  CertList,
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
  onPostNewExpert,
  onPostNewLead,
  onUpdateCourseData,
} from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Fonts } from 'shared/constants/AppEnums';
import { useRouter } from 'next/router';

const validationSchema = yup.object({
  Name: yup.string().required('First Name is required'),
  Phone: yup
    .string()
    .required('Enter 10 digit valid mobile number')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  Email: yup
    .string()
    .email('Not valid Email id ')
    .required('Email ID is required !'),
  Certification: yup.string().required('Certification is required'),
});
export default function ExpertForm({ AllowedFieldArray }) {
  const router = useRouter()
  console.log('Router ', router.asPath)
  const dispatch = useDispatch()
  const onSubmit = async (data, { setSubmitting, resetForm }) => {
    console.log('Signup Form Submission', data);
    data.EnquiryFromLink = router.asPath
    setSubmitting(true);
    dispatch(onPostNewExpert({ data }))
    setSubmitting(false);
  };
  const initialValues = {
    Name: '',
    Email: '',
    Phone: '',
    Certification: '',
    Message: '',

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
            <Grid item xs={12} md={12}>
              {AllowedFieldArray.includes('Name') && (
                <AppTextField
                  label='Name'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Name'
                  variant='outlined'
                />
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              {AllowedFieldArray.includes('Email') && (
                <AppTextField
                  label='Email'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Email'
                  variant='outlined'
                />
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              {AllowedFieldArray.includes('Phone') && (
                <AppTextField
                  label='Phone'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Phone'
                  variant='outlined'
                />
              )}
            </Grid>

            <Grid item md={6} xs={12}>
              {AllowedFieldArray.includes('Certification') && (
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id='demo-simple-select-label'>
                    <IntlMessages id='Certification' />
                  </InputLabel>
                  <Field
                    name='Certification'
                    options={CertList}
                    component={CustomizedSelectFormik}
                    disabled={isSubmitting}
                  />
                </FormControl>
              )}
            </Grid>

            {/* <Grid item xs={12} md={6}>
              {AllowedFieldArray.includes('Certification') && (
                <AppTextField
                  label='Certification'
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='Certification'
                  variant='outlined'
                />
              )}
            </Grid> */}

            <Grid item xs={12} md={12}>
              {AllowedFieldArray.includes('Message') && (
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
            {/* <Grid item md={6} xs={12}>
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
            </Grid> */}
            {/* <Grid container justifyContent='space-between' spacing={2} p={2}> */}
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
            {/* {AllowedFieldArray.includes('StartDate') && (
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
              )} */}
            {/* {AllowedFieldArray.includes('EndDate') && (
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
              )} */}
            {/* {AllowedFieldArray.includes('delDate') && (
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
            </Grid> */}
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
            {/* {AllowedFieldArray.includes('Aa') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.actualcost' />}
                  disabled={values.isSubmitting}
                  // name='Cost.Actual'
                  name='ActualCost'
                  variant='outlined'
                />
              </Grid>
            )} */}
            {/* {AllowedFieldArray.includes('A') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.discost' />}
                  name='DiscountedCost'
                  // name='`Cost`.Discounted'
                  disabled={values.isSubmitting}
                  variant='outlined'
                />
              </Grid>
            )} */}
            {/* {AllowedFieldArray.includes('Time') && (
              <Grid item xs={6} md={3}>
                <AppTextField
                  label={<IntlMessages id='Course.time' />}
                  disabled={values.isSubmitting}
                  name='Time'
                  variant='outlined'
                />
              </Grid>
            )} */}
            {/* {AllowedFieldArray.includes('Place') && (
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
            )} */}
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
      )
      }
    </Formik >
  );
}

ExpertForm.propTypes = {
  AllowedFieldArray: PropTypes.array,
};
