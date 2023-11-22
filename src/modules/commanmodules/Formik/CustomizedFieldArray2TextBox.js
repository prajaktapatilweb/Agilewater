import AppTextField from '@crema/core/AppFormComponents/AppTextField';
import IntlMessages from '@crema/utility/IntlMessages';
import {FormControl, Grid, IconButton, InputLabel} from '@mui/material';
import {Field, FieldArray} from 'formik';
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';
import React from 'react';
import PropTypes from 'prop-types';
import {CourseOptions, SpecializationList} from 'modules/Constant/CommanConst';
import CustomizedSelectFormik from './CustomizedSelectFormik';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

function CustomizedFieldArray2TextBox(props) {
  const arrayName = props.arrayField;
  const PTIndex = props.PTIndex;
  return (
    <>
      <FieldArray name={`PaymentTypes[${PTIndex}].${arrayName}`}>
        {(fieldArrayProps) => {
          const {push, remove, form} = fieldArrayProps;
          const {values} = form;
          // console.log('Values', values);
          let {[arrayName]: arrayName1} = values.PaymentTypes[PTIndex];
          return (
            <div>
              <Grid container spacing={4}>
                {arrayName1?.map((individual, index) => (
                  <>
                    <Grid item xs={3}>
                      <AppTextField
                        key={index}
                        label={
                          <>
                            <IntlMessages id={props.fieldName1} /> {index + 1}
                          </>
                        }
                        disabled={form.isSubmitting}
                        name={`PaymentTypes[${PTIndex}].${arrayName}[${index}].Title`}
                        variant='outlined'
                        inputProps={{style: {textTransform: 'uppercase'}}}
                        sx={{
                          width: '100%',
                          mb: 3,
                          // '& .MuiInputBase-input': {fontSize: 14},
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <AppTextField
                        key={index}
                        label={
                          <>
                            <IntlMessages id={props.fieldName2} /> {index + 1}
                          </>
                        }
                        disabled={form.isSubmitting}
                        type='number'
                        name={`PaymentTypes[${PTIndex}].${arrayName}[${index}].Percentage`}
                        variant='outlined'
                        sx={{
                          width: '100%',
                          mb: 3,
                          // '& .MuiInputBase-input': {fontSize: 14},
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <AppTextField
                        key={index}
                        label={
                          <>
                            <IntlMessages id={props.fieldName3} /> {index + 1}
                          </>
                        }
                        disabled={form.isSubmitting}
                        type='number'
                        name={`PaymentTypes[${PTIndex}].${arrayName}[${index}].MaxTimeAppl`}
                        variant='outlined'
                        sx={{
                          width: '100%',
                          mb: 3,
                          // '& .MuiInputBase-input': {fontSize: 14},
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      {arrayName1.length > 1 && index > 0 ? (
                        <IconButton
                          size='small'
                          color='warning'
                          sx={{m: 0}}
                          onClick={() => remove(index)}
                        >
                          <ClearIcon />
                        </IconButton>
                      ) : // <ButtonRemove index={index} remove={remove} />
                      null}
                      {arrayName1.length === index + 1 ? (
                        // <ButtonAdd push={push} />
                        <IconButton
                          type='button'
                          color='success'
                          sx={{m: 0}}
                          onClick={() => push('')}
                        >
                          <AddIcon />
                        </IconButton>
                      ) : null}
                    </Grid>
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

export default CustomizedFieldArray2TextBox;

CustomizedFieldArray2TextBox.propTypes = {
  arrayField: PropTypes.string,
  fieldName1: PropTypes.string,
  fieldName2: PropTypes.string,
  fieldName3: PropTypes.string,
  PTIndex: PropTypes.number,
};
