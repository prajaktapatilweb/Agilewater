import React from 'react';
import {styled} from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import {Box, Grid, Typography, alpha} from '@mui/material';
import {useDropzone} from 'react-dropzone';
import {AppGridContainer} from '@crema';
import {ErrorMessage} from 'formik';
import TextError from 'modules/commanmodules/Formik/TextError';
import {TiFolderOpen} from 'react-icons/ti';
import {useThemeContext} from '@crema/utility/AppContextProvider/ThemeContextProvider';
import Papa from 'papaparse';
import {useState} from 'react';
import PropTypes from 'prop-types';

export default function FileSubmission({
  form,
  field,
  setUploadedFiles,
  setUploadedFilesData,
}) {
  const [parsedData, setParsedData] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'text/csv',
    onDrop: (acceptedFiles) => {
      // to update formik field
      setFieldValue('photoURL', URL.createObjectURL(acceptedFiles[0]));
      setFieldValue(name, acceptedFiles[0]);
      setUploadedFiles(
        acceptedFiles.map(
          (file) => (
            // For Displaying Data of the csv file
            Papa.parse(file, {
              header: true,
              skipEmptyLines: false,
              complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.map((d) => {
                  rowsArray.push(Object.keys(d));
                  valuesArray.push(Object.values(d));
                });

                // Parsed Data Response in array format
                setParsedData(results.data);
                // Filtered Column Names
                setUploadedFilesData({
                  TableRows: rowsArray[0],
                  RowValues: valuesArray,
                });
              },
            }),
            // for Displaying the name of file and size
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        ),
      );
    },
  });
  const {name} = field;
  const {setFieldValue, values} = form;
  const {theme} = useThemeContext();

  return (
    <div>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <label htmlFor='icon-button-file'>
          <Box sx={{'& img': {width: '90%'}}}>
            <img src={values.photoURL} />
          </Box>
          <TiFolderOpen
            style={{
              fontSize: 40,
              marginBottom: 4,
              color: theme.palette.primary.main,
            }}
          />
        </label>
      </div>
      <Box mt={4}>
        <ErrorMessage component={TextError} name={name} />
      </Box>
    </div>
  );
}

FileSubmission.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  setUploadedFiles: PropTypes.array,
  setUploadedFilesData: PropTypes.array,
};
