import React from 'react';

import {Radio, RadioGroup, FormControlLabel, Stack} from '@mui/material';
import PropTypes from 'prop-types';

const renderOptions = (options, disabled) => {
  return (
    <Stack direction='column'>
      {options.map((option) => (
        <FormControlLabel
          key={option.key}
          value={option.text}
          control={<Radio />}
          label={option.text}
          disabled={disabled}
        />
      ))}
    </Stack>
  );
};

const FormikRadioGroup = ({
  field,
  form: {touched, errors},
  name,
  disabled,
  options,
  children,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <React.Fragment>
      <RadioGroup row {...field} {...props} name={fieldName}>
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child*/}
        {options ? renderOptions(options, disabled) : children}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <span style={{color: 'red', fontFamily: 'sans-serif'}}>
          {errors[fieldName]}
        </span>
      )}
    </React.Fragment>
  );
};

export default FormikRadioGroup;

FormikRadioGroup.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.object,
  children: PropTypes.object,
};
