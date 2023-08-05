import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import TextError from './TextError';
import { ErrorMessage } from 'formik';

function CustomizedCheckboxFormik({
  options,
  olddata,
  // checked,
  // setChecked,
  form,
  onBlur,
  field,
  disabled,
}) {
  const { name, value } = field;
  const [checked, setChecked] = React.useState(value);
  const { setFieldValue } = form;
  const handleCheck = (e) => {
  var updatedList = [...checked];
    if (e.target.checked) {
      checked.includes(e.target.value) ? null :
        updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
    setFieldValue(name, updatedList);
  };
  return (
    <React.Fragment>
      <FormGroup row>
        {options ? options.map((item) => {
          return (
            <FormControlLabel
              key={item.key}
              control={
                <Checkbox
                  value={item.value}
                  onChange={handleCheck}
                  checked={field.value ? field.value.includes(item.value) : null}
                  onBlur={onBlur}
                  name={item.text}
                  disabled={disabled}
                />
              }
              label={item.text}
            />
          );
        }) : null}
      </FormGroup>
      <ErrorMessage component={TextError} name={name} />
    </React.Fragment>
  );
}

export default CustomizedCheckboxFormik;
