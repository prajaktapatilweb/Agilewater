import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import IntlMessages from '@crema/utility/IntlMessages';
import {FormControl, Grid, InputLabel} from '@mui/material';
import {Field, FieldArray} from 'formik';
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';
import React from 'react';
import PropTypes from 'prop-types';
import {CourseOptions, SpecializationList} from 'modules/Constant/CommanConst';
import CustomizedSelectFormik from './CustomizedSelectFormik';

function CustomizedFieldArray(props) {
  const arrayName = props.arrayName;
  console.log(arrayName);
  return (
    <>
      <FieldArray name={arrayName}>
        {(fieldArrayProps) => {
          // console.log({ fieldArrayProps })
          const {push, remove, form} = fieldArrayProps;
          // console.log('2', { form })
          const {values} = form;
          // console.log({values});
          let {[arrayName]: arrayName1} = values;
          // const { arrayName } = values;
          return (
            <div>
              <Grid container spacing={4}>
                {arrayName1.map((individual, index) => (
                  <>
                    <Grid item lg={8} md={8} sm={8} xs={8}>
                      {/* <AppTextField
                        key={index}
                        label={
                          index === 0 &&
                          (arrayName === 'email' ||
                            arrayName === 'phNumbers' ||
                            arrayName === 'mobilenumber') ? null : (
                            <>
                              <IntlMessages id={props.fieldName} /> {''}
                              {index + 1}
                            </>
                          )
                        }
                        // disabled={form.isSubmitting}
                        disabled={
                          index === 0 &&
                          (arrayName === 'email' ||
                            arrayName === 'phNumbers' ||
                            arrayName === 'mobilenumber')
                            ? 'true'
                            : form.isSubmitting
                        }
                        name={`${arrayName}[${index}]`}
                        variant='outlined'
                        sx={{
                          width: '100%',
                          mb: 3,
                          // '& .MuiInputBase-input': {fontSize: 14},
                        }}
                      /> */}
                      <FormControl sx={{width: '100%'}}>
                        <InputLabel id='demo-simple-select-label'>
                          <IntlMessages id={props.fieldName} />
                          {/* <IntlMessages id='course' /> */}
                        </InputLabel>
                        <Field
                          name={`${arrayName}[${index}]`}
                          // name='CourseName'
                          options={SpecializationList}
                          component={CustomizedSelectFormik}
                          // disabled={isSubmitting}
                        />
                      </FormControl>
                    </Grid>
                    {arrayName1.length > 1 && index > 0 ? (
                      <ButtonRemove index={index} remove={remove} />
                    ) : null}
                    {arrayName1.length === index + 1 ? (
                      <ButtonAdd push={push} />
                    ) : null}
                  </>
                ))}
              </Grid>
            </div>
          );
        }}
      </FieldArray>
    </>
  );
}

export default CustomizedFieldArray;

CustomizedFieldArray.propTypes = {
  arrayName: PropTypes.string,
  fieldName: PropTypes.string,
};
