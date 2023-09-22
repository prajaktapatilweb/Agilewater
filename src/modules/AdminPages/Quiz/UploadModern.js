import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Field, Form, Formik} from 'formik';
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import FileSubmission from './FileSubmission';
import {useState} from 'react';
import {onUploadQuizCSVFile} from 'redux/actions';
import {useDispatch} from 'react-redux';
import CustomizedSelectFormik from 'modules/commanmodules/Formik/CustomizedSelectFormik';
import {QuizSubjectList} from 'modules/Constant/CommanConst';

const UploadModern = ({
  uploadText,
  // dropzone,
  setUploadedFiles,
  setUploadedFilesData,
}) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (data, {setSubmitting, resetForm}) => {
    console.log('Signup Form Submission', data);
    setSubmitting(true);
    const formData = new FormData();
    for (let value in data) {
      console.log('FormData SSS', value, data[value]);
      formData.append(value, data[value]);
    }
    console.log(formData.getAll('FileName'));
    dispatch(onUploadQuizCSVFile(formData));
    setUploadedFiles([]);
    setUploadedFilesData({});
    resetForm();
    setChecked(false);
    // window.location.reload(false);
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{FileName: '', QuizSubject: ''}}
      validateOnChange={true}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({values}) => (
        <Form
          style={{textAlign: 'left'}}
          noValidate
          autoComplete='off'
          encType='multipart/form-data'
        >
          <Box
            sx={{position: 'relative', '& ul': {listStyle: 'none', padding: 0}}}
          >
            <Box
              // {...dropzone.getRootProps({className: 'dropzone'})}
              sx={{
                cursor: 'pointer',
                border: (theme) => `dashed 2px ${theme.palette.divider}`,
                borderRadius: 2.5,
                p: 5,
                textAlign: 'center',
                mb: 4,
                color: 'text.secondary',
                backgroundColor: 'background.default',
              }}
            >
              <FormControl sx={{width: '100%'}}>
                <Field
                  name='FileName'
                  component={FileSubmission}
                  setUploadedFiles={setUploadedFiles}
                  setUploadedFilesData={setUploadedFilesData}
                />
              </FormControl>

              <p>{uploadText}</p>
            </Box>
          </Box>
          <Typography variant='h3' pb={3}>
            Select the Quiz Subject{' '}
          </Typography>
          <FormControl sx={{width: '100%'}}>
            <InputLabel id='demo-simple-select-label'> Quiz Subject</InputLabel>
            <Field
              name='QuizSubject'
              options={QuizSubjectList}
              component={CustomizedSelectFormik}
              // disabled={isSubmitting}
            />
          </FormControl>
          <Checkbox
            color='success'
            label='Bottom'
            checked={checked}
            onChange={(event) => setChecked(true)}
          />
          <Typography variant='p'>I Checked data</Typography>
          <Button
            variant='contained'
            disabled={!checked}
            sx={{m: 3}}
            type='submit'
          >
            Upload
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UploadModern;

UploadModern.propTypes = {
  uploadText: PropTypes.string,
  // dropzone: PropTypes.object,
  setUploadedFiles: PropTypes.array,
  setUploadedFilesData: PropTypes.object,
};
