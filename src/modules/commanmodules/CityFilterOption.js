import IntlMessages from '@crema/utility/IntlMessages';
import {Box, Button, FormControl, InputLabel} from '@mui/material';
import {Field, Form, Formik} from 'formik';
import {CityOptions, CourseOptions} from 'modules/Constant/CommanConst';
import React, {useState} from 'react';
import CustomizedSelectFormik from './Formik/CustomizedSelectFormik';

export default function CityFilterOption({setCitySelction}) {
  const setSelection = (changedValues) => {
    setCitySelction(changedValues);
  };
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          City: '',
        }}
      >
        {({values, isSubmitting}) => (
          <Form style={{textAlign: 'left'}}>
            <Box sx={{mb: {xs: 5, lg: 8}}}>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              <FormControl
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': {fontSize: 14},
                }}
              >
                <InputLabel id='demo-simple-select-label'>
                  <IntlMessages id='city' />
                </InputLabel>
                <Field
                  name='City'
                  options={CityOptions}
                  component={CustomizedSelectFormik}
                  userDefinedFunction={setSelection}
                  disabled={isSubmitting}
                />
              </FormControl>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
CityFilterOption.propTypes = {
  setCitySelction: PropTypes.function,
};
