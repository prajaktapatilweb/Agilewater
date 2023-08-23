import React from 'react';
import { useAuthUser } from '@crema/utility/AuthHooks';
import { Formik } from 'formik';
import * as yup from 'yup';
import ProfilePhotoForm from './ProfilePhotoForm';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import IntlMessages from '@crema/utility/IntlMessages';
// import  toast  from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import jwtAxios from '@crema/services/auth/jwt-auth';

const validationSchema = yup.object().shape({
  photoURL: yup.string().required(<IntlMessages id='form.FilePhoto' />),
});
const ProfilePhoto = ({CoachData}) => {
  const [flagPhotoChanged, setFlagPhotoChanged] = React.useState(false)

  // toast.configure({
  //   autoClose: 8000,
  //   draggable: false,
  // });`
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: 550,
      }}
    >
      <Formik
        validateOnBlur={true}
        initialValues={{
          photoURL: CoachData?.photoURL
            ? `/userFileUploads/${CoachData?.photoURL}`
            : '/assets/images/placeholder.jpg',
          FilePhoto: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setFlagPhotoChanged(false)
          setSubmitting(true);
          const formData = new FormData();
          //TODO Api Call here to save user info
          formData.append('FilePhoto', data.FilePhoto);
          const tmpe = formData.get('FilePhoto')
          await jwtAxios
            .put(`users/photo/${user.Uid}`, formData)
            .then(function (response) {
              toast.success(response.data.Result);
              setSubmitting(false);
            })
            .catch(function (response) {
              toast.error(response.data.error);
              setSubmitting(false);
            });

        }}
      >
        {({ values, setFieldValue }) => {
          return (
            <ProfilePhotoForm values={values} setFieldValue={setFieldValue}
              flagPhotoChanged={flagPhotoChanged} CoachData={CoachData}
              setFlagPhotoChanged={setFlagPhotoChanged} />
          );
        }}
      </Formik>
    </Box>
  );
};

export default ProfilePhoto;

ProfilePhoto.propTypes = {
  CoachData:PropTypes.object
};
