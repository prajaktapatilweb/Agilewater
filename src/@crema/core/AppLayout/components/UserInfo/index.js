import React from 'react';
import orange from '@mui/material/colors/orange';
import {useAuthMethod, useAuthUser} from '../../../../utility/AuthHooks';
import {Box, Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Fonts} from '../../../../../shared/constants/AppEnums';
import PropTypes from 'prop-types';
import Router, {useRouter} from 'next/router';
import AppDialog from '@crema/core/AppDialog';
import Signin from 'modules/auth/Signin';
import SigninFirebase from 'modules/auth/Signin/SigninFirebase';
import LoginDialogComp from './LoginButton';
import LoginButton from './LoginButton';

const UserInfo = ({color}) => {
  const {logout} = useAuthMethod();
  const {user} = useAuthUser();
  const history = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserAvatar = () => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  return (
    <>
      {user ? (
        <>
          <Box
            onClick={handleClick}
            sx={{
              py: 3,
              px: 3,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            className='user-info-view'
          >
            <Box sx={{py: 0.5}}>
              {user?.photoURL ? (
                <Avatar
                  sx={{
                    height: 40,
                    width: 40,
                    fontSize: 24,
                    backgroundColor: orange[500],
                  }}
                  src={user.photoURL}
                />
              ) : (
                <Avatar
                  sx={{
                    height: 40,
                    width: 40,
                    fontSize: 24,
                    backgroundColor: orange[500],
                  }}
                >
                  {getUserAvatar()}
                </Avatar>
              )}
            </Box>
            <Box
              sx={{
                width: {xs: 'calc(100% - 62px)', xl: 'calc(100% - 72px)'},
                ml: 4,
                color: color,
              }}
              className='user-info'
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    mb: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 16,
                    fontWeight: Fonts.MEDIUM,
                    color: 'inherit',
                  }}
                  component='span'
                >
                  {user?.displayName ? user.displayName : 'Admin User '}
                </Box>
                <Box
                  sx={{
                    ml: 3,
                    color: 'inherit',
                    display: 'flex',
                  }}
                >
                  <ExpandMoreIcon />
                </Box>
              </Box>
              <Box
                sx={{
                  mt: -0.5,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  color: 'inherit',
                }}
              >
                System Manager
              </Box>
            </Box>
          </Box>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                history.push('/my-account');
              }}
            >
              My account
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <LoginButton ButtonHeading='Login'/>
      )}
    </>
  );
};

export default UserInfo;

UserInfo.defaultProps = {
  color: 'text.secondary',
};

UserInfo.propTypes = {
  color: PropTypes.string,
};
