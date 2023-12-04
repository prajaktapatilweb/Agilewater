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
import { AppCard } from '@crema';

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
    <AppCard sx={{ p: 5, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
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
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
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
    </AppCard>
  );
}

ExpertForm.propTypes = {
  AllowedFieldArray: PropTypes.array,
};
