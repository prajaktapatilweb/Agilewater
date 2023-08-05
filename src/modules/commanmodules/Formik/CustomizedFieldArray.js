import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import IntlMessages from '@crema/utility/IntlMessages';
import { Grid } from '@mui/material';
import { FieldArray } from 'formik';
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';
import React from 'react';

function CustomizedFieldArray(props) {
  const arrayName = props.arrayName;
  // console.log(arrayName);
  return (
    <>
      <FieldArray name={arrayName}>
        {(fieldArrayProps) => {
          // console.log({ fieldArrayProps })
          const { push, remove, form } = fieldArrayProps;
          // console.log('2', { form })
          const { values } = form;
          // console.log({values});
          let { [arrayName]: arrayName1 } = values;
          // const { arrayName } = values;
          return (
            <div>
              <Grid container>
                {arrayName1.map((individual, index) => (
                  <>
                    <Grid item lg={8} md={8} sm={8} xs={8}>
                      <AppTextField
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
                      />
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
