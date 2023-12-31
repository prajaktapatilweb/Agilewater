import React from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import {useIntl} from 'react-intl';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@mui/material/Box';
import AppTextField from '../../../@crema/core/AppFormComponents/AppTextField';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '../../../@crema/core/AppInfoView';
import {useAuthMethod} from '../../../@crema/utility/AuthHooks';
import {Fonts} from '../../../shared/constants/AppEnums';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {useRouter} from 'next/router';
import AppLogo from '@crema/core/AppLayout/components/AppLogo';
import Image from 'next/image';

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SigninFirebase = () => {
  console.log('dddxxx30');

  const {signInWithEmailAndPassword, signInWithPopup} = useAuthMethod();
  const history = useRouter();

  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'firebase'});
  };

  const {messages} = useIntl();

  return (
    <>
      <Box sx={{mb: {xs: 6, xl: 8}}}>
        <Box
          sx={{
            mb: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AppLogo />
        </Box>
      </Box>
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', mb: 5}}>
          <Formik
            validateOnChange={true}
            initialValues={{
              email: 'abc@abc.com',
              password: 'abc123',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, {setSubmitting}) => {
              setSubmitting(true);
              signInWithEmailAndPassword(data);
              setSubmitting(false);
            }}
          >
            {({isSubmitting}) => (
              <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
                <Box sx={{mb: {xs: 5, xl: 8}}}>
                  <AppTextField
                    placeholder={messages['email']}
                    name='email'
                    label={<IntlMessages id='email' />}
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box sx={{mb: {xs: 3, xl: 4}}}>
                  <AppTextField
                    type='password'
                    placeholder={messages['password']}
                    label={<IntlMessages id='password' />}
                    name='password'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                {history.asPath === '/login' && (
                  <Box
                    sx={{
                      mb: {xs: 3, xl: 4},
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox sx={{ml: -3}} />
                      <Box
                        component='span'
                        sx={{
                          color: 'grey.500',
                        }}
                      >
                        <IntlMessages id='common.remember' />
                      </Box>
                    </Box>
                    <Box
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: Fonts.MEDIUM,
                        cursor: 'pointer',
                        display: 'block',
                        textAlign: 'right',
                      }}
                      onClick={onGoToForgetPassword}
                    >
                      <IntlMessages id='common.forgetPassword' />
                    </Box>
                  </Box>
                )}

                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={isSubmitting}
                    sx={{
                      minWidth: 160,
                      fontWeight: Fonts.REGULAR,
                      fontSize: 16,
                      textTransform: 'capitalize',
                      padding: '4px 16px 8px',
                    }}
                  >
                    <IntlMessages id='login' />
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>

        <Box
          sx={{
            color: 'grey.500',
            mb: {xs: 3, md: 3},
          }}
        >
          <span style={{marginRight: 4}}>
            <IntlMessages id='common.dontHaveAccount' />
          </span>
          <Box
            component='span'
            sx={{
              fontWeight: Fonts.MEDIUM,
              '& a': {
                color: (theme) => theme.palette.primary.main,
                textDecoration: 'none',
              },
            }}
          >
            <Link href='/signup'>
              <a>
                <IntlMessages id='common.signup' />
              </a>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: (theme) => theme.palette.background.info,
            mx: {xs: -5, lg: -10},
            mb: {xs: -1, lg: -1},
            mt: 'auto',
            py: 2,
            px: {xs: 5, lg: 10},
          }}
        >
          <Box
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <IntlMessages id='common.orLoginWith' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{
                p: 2,
                '& svg': {fontSize: 18},
                color: (theme) => theme.palette.text.secondary,
              }}
              onClick={() => signInWithPopup('google')}
            >
              <Image
                src={'/assets/images/icons8-gmail-48.png'}
                height='16'
                width={'16'}
              />
              {/* <AiOutlineGoogle color='#D44638'/> */}
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': {fontSize: 18},
                color: (theme) => theme.palette.text.secondary,
              }}
              onClick={() => signInWithPopup('facebook')}
            >
              <FaFacebookF color='#3b5998' />
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': {fontSize: 18},
                color: (theme) => theme.palette.text.secondary,
              }}
              onClick={() => signInWithPopup('github')}
            >
              <BsGithub color='#171515' />
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': {fontSize: 18},
                color: (theme) => theme.palette.text.secondary,
              }}
              onClick={() => signInWithPopup('twitter')}
            >
              <AiOutlineTwitter color='#00ACEE' />
            </IconButton>
          </Box>
        </Box>

        <AppInfoView />
      </Box>
    </>
  );
};

export default SigninFirebase;
