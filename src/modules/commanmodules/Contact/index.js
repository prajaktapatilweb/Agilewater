import React from 'react';
import { AppCard } from '../../../@crema';
import ContactUsForm from '../Contact/ContactUsForm';
import AppGridContainer from '../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SendMessage from '../Contact/SendMessage';
import contactUsData from '../../../@crema/services/db/extraPages/contactUs';
import Address from '../Contact/Address';
import AppAnimate from '../../../@crema/core/AppAnimate';
import SimpleMap from './SimpleMap';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import { AddressMap } from './Address/Addressmap';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  message: yup.string().required(<IntlMessages id='validation.message' />),
});

const Contact = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard>
        <Box sx={{ mb: 5, maxHeight: '40%' }}>
          {/* <SimpleMap /> */}
          <AddressMap />
        </Box>
        <SendMessage sendMessage={contactUsData.sendMessage} />
        <AppGridContainer>
          <Grid item xs={12} md={6}>
            <Formik
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                console.log('data: ', data);
                //TODO Api Call here to save user info
                setSubmitting(false);
              }}
            >
              <ContactUsForm />
            </Formik>
          </Grid>
          <Grid item xs={12} md={6}>
            <Address />
          </Grid>
        </AppGridContainer>
      </AppCard>
    </AppAnimate>
  );
};

export default Contact;
