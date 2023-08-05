import React from 'react';
import {alpha, Box, Button, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/utility/IntlMessages';
import {useDropzone} from 'react-dropzone';
import {Form} from 'formik';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import {styled} from '@mui/material/styles';
import Image from 'next/image';

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

const ProfilePhotoForm = ({
  values,
  setFieldValue,
  flagPhotoChanged,
  setFlagPhotoChanged,
  CoachData,
}) => {
  const [photoLocation, setPhotoLocation] = React.useState(
    CoachData?.photoURL
      ? `/userFileUoloads/${CoachData.photoURL}`
      : '/assets/images/placeholder.jpg',
  );
  React.useEffect(() => {
    setPhotoLocation(
      CoachData?.photoURL
        ? `/userFileUoloads/${CoachData?.photoURL}`
        : '/assets/images/placeholder.jpg',
    );
  }, [flagPhotoChanged]);

  const cancelSelection = () => {
    setFieldValue('photoURL', photoLocation);
    setFlagPhotoChanged(false);
  };
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue('photoURL', URL.createObjectURL(acceptedFiles[0]));
      setFieldValue('FilePhoto', acceptedFiles[0]);
      setFlagPhotoChanged(true);
    },
  });

  return (
    <Form noValidate autoComplete='off'>
      <Box
        sx={{
          // display: 'flex',
          alignItems: 'center',
          mb: {xs: 5, lg: 6},
        }}
      >
        <AvatarViewWrapper {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            <Box sx={{'& img': {width: '90%'}}}>
              <img src={values.photoURL} />
              {/* <Image src={values.photoURL} width='90%' layout='fill'/> */}
              {/* <Avatar
                src={values.photoURL}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  transition: 0.5,
                }}
              /> */}
            </Box>
            <Box className='edit-icon'>
              <EditIcon />
            </Box>
          </label>
        </AvatarViewWrapper>
      </Box>
      <AppGridContainer spacing={4}>
        {flagPhotoChanged ? (
          !(
            values.FilePhoto.type === 'image/png' ||
            values.FilePhoto.type === 'image/jpeg'
          ) ? (
            <Typography variant='h4' sx={{color: 'error.main'}}>
              Only JPEG or PNG file type
            </Typography>
          ) : (
            <Grid item xs={12} md={12}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Button
                  sx={{position: 'relative', minWidth: 100}}
                  color='primary'
                  variant='contained'
                  type='submit'
                >Save
                </Button>
                <Button
                  sx={{position: 'relative', minWidth: 100, ml: 2.5}}
                  color='primary'
                  variant='outlined'
                  onClick={cancelSelection}
                >
                  <IntlMessages id='common.cancel' />
                </Button>
  
              </Box>
            </Grid>
          )
        ) : null}
      </AppGridContainer>
      <pre>{JSON.stringify(values, null, 4)}</pre>
      {/* {values.FilePhoto.type} */}
      {/* <Typography variant='h4' sx={{ color: 'error.main' }}>
        {values.FilePhoto ? (!(values.FilePhoto.type === 'image/png' || values.FilePhoto.type === 'image/jpeg') ? 'Only JPEG or PNG file type is not Allowed' : null) : null}
      </Typography> */}
    </Form>
  );
};

export default ProfilePhotoForm;
ProfilePhotoForm.propTypes = {
  setFieldValue: PropTypes.func,
  values: PropTypes.object,
  flagPhotoChanged: PropTypes.bool,
  setFlagPhotoChanged: PropTypes.func,
  CoachData: PropTypes.object,
};
