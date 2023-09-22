import AppDialog from '@crema/core/AppDialog';
import {useAuthUser} from '@crema/utility/AuthHooks';
import {Button} from '@mui/material';
import SigninFirebase from 'modules/auth/Signin/SigninFirebase';
import React from 'react';
import PropTypes from 'prop-types';

export default function LoginButton({
  ButtonHeading,
  sxStyle,
  onClickFunction,
  disabled,
  btnQuizID = null,
}) {
  const {user} = useAuthUser();
  const [LoginDialog, setLoginDialog] = React.useState(false);

  const toggleLoginDialog = () => {
    setLoginDialog(!LoginDialog);
  };
  return (
    <>
      <Button
        variant='contained'
        onClick={() =>
          user ? onClickFunction(btnQuizID) : setLoginDialog(true)
        }
        // onClick={() => Router.push('/login')}
        sx={{...sxStyle}}
        disabled={disabled}
      >
        {ButtonHeading}
      </Button>
      <AppDialog open={user ? false : LoginDialog} onClose={toggleLoginDialog}>
        <SigninFirebase />
      </AppDialog>
    </>
  );
}

LoginButton.propTypes = {
  ButtonHeading: PropTypes.string,
  sxStyle: PropTypes.object,
  onClickFunction: PropTypes.func,
  disabled: PropTypes.string,
  btnQuizID: PropTypes.string,
};
