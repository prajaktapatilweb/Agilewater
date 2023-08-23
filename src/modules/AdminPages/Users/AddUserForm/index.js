import React from 'react';
import * as yup from 'yup';
import {Box, Button, Card, FormControl, Grid, InputLabel} from '@mui/material';
import {Formik, Field, Form} from 'formik';
import ProfilePhoto from 'modules/AdminPages/Coaches/ProfilePhoto';
import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {Fonts} from 'shared/constants/AppEnums';
import {AppCard} from '@crema';
import {onPostNewUserData, onUpdateUserData} from 'redux/actions';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

const validationSchema = yup.object({
  Name: yup.string().required('Name is required !'),
  Mobilenumber: yup
    .string()
    .required('Enter 10 digit valid mobile number')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  Email: yup
    .string()
    .email('Not valid Email id ')
    .required('Email ID is required !'),
  Role: yup.string().required('Must select a Role'),
});

export default function AddUserForm({toggleAddUserForm, User}) {
  console.log('Add UserForm', User);
  const dispatch = useDispatch();
  const initialValues = {
    Name: User?.Name || '',
    Mobilenumber: User?.Mobilenumber || '',
    Email: User?.Email || '',
    Role: User?.Role || '',
    Avatar: User?.Avatar || '',
    photoURL: User?.Avatar || '/assets/images/placeholder.jpg',
  };
  const onSubmit = async (data, {setSubmitting, resetForm}) => {
    console.log('Signup Form Submission', data);
    setSubmitting(true);
    const formData = new FormData();
    for (let value in data) {
      formData.append(value, data[value]);
    }
    User
      ? dispatch(onUpdateUserData(User.UserID, formData))
      : dispatch(onPostNewUserData(formData));
    toggleAddUserForm();
    setSubmitting(false);
  };
  return (
    <>
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <AppCard>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={true}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {({values, isSubmitting}) => (
              // {/* {(data, errors, isValidating, isSubmitting) => ( */}
              <Form
                style={{textAlign: 'left'}}
                noValidate
                autoComplete='off'
                encType='multipart/form-data'
              >
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                <Grid
                  container
                  sx={{mb: {xs: 4, xl: 5}}}
                  spacing={15}
                  alignItems='center'
                >
                  <Grid item xs={12} sm={4}>
                    <Card
                      sx={{alignItems: 'center', p: {xs: 15, sm: 5, lg: 3}}}
                    >
                      {/* <ProfilePhoto CoachData={CoachData} /> */}
                      <FormControl sx={{width: '100%'}}>
                        <InputLabel id='demo-simple-select-label'>
                          User Photo
                        </InputLabel>
                        <Field name='Avatar' component={ProfilePhoto} />
                      </FormControl>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <AppTextField
                          label='Name'
                          disabled={values.isSubmitting}
                          name='Name'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl sx={{width: '100%'}}>
                          <InputLabel id='demo-simple-select-label'>
                            User Role
                          </InputLabel>
                          <Field
                            name='Role'
                            options={[
                              {key: 1, text: 'Admin'},
                              {key: 2, text: 'Employee'},
                            ]}
                            component={CustomizedSelectFormik}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <AppTextField
                          label='Mobile Number'
                          disabled={values.isSubmitting}
                          // name='Cost.Actual'
                          name='Mobilenumber'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <AppTextField
                          label='Email'
                          disabled={values.isSubmitting}
                          // name='Cost.Actual'
                          name='Email'
                          variant='outlined'
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
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </AppCard>
      </Box>
    </>
  );
}

AddUserForm.propTypes = {
  toggleAddUserForm: PropTypes.func,
  User: PropTypes.object.isRequired,
};
