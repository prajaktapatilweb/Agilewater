import React from 'react';
import {styled} from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import {Box, Grid, Typography, alpha} from '@mui/material';
import {useDropzone} from 'react-dropzone';
import {AppGridContainer} from '@crema';
import { ErrorMessage } from 'formik';
import TextError from 'modules/commanmodules/Formik/TextError';


const AvatarViewWrapper = styled('div')(({theme}) => {
  return {
    position: 'relative',
    cursor: 'pointer',
    '& .edit-icon': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 1,
      border: `solid 2px ${theme.palette.background.paper}`,
      backgroundColor: alpha(theme.palette.primary.main, 0.7),
      color: theme.palette.primary.contrastText,
      borderRadius: '50%',
      width: 46,
      height: 46,
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      '& .MuiSvgIcon-root': {
        fontSize: 32,
      },
    },
    '&.dropzone': {
      outline: 0,
      '&:hover .edit-icon, &:focus .edit-icon': {
        display: 'flex',
      },
    },
  };
});
export default function ProfilePhoto({form, field}) {
  const [flagPhotoChanged, setFlagPhotoChanged] = React.useState(false);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue('photoURL', URL.createObjectURL(acceptedFiles[0]));
      setFieldValue(name, acceptedFiles[0]);
      setFlagPhotoChanged(true);
    },
  });
  const {name} = field;
  const {setFieldValue, values} = form;
  return (
    <div>
      <AvatarViewWrapper {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <label htmlFor='icon-button-file'>
          <Box sx={{'& img': {width: '90%'}}}>
            <img src={values.photoURL} />
          </Box>
          <Box className='edit-icon'>
            <EditIcon />
          </Box>
        </label>
      </AvatarViewWrapper>
      <AppGridContainer spacing={4}>
        {flagPhotoChanged &&
          (!(
            values.Avatar.type === 'image/png' ||
            values.Avatar.type === 'image/jpeg'
          ) ? (
            <Typography variant='h4' sx={{color: 'error.main'}}>
              Only JPEG or PNG file type
            </Typography>
          ) : null)}
      </AppGridContainer>
      <Box mt={4}>
      <ErrorMessage component={TextError} name={name} />
      </Box>
    </div>
  );
}
