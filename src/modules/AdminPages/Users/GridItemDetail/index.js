import React from 'react';
import Avatar from '@mui/material/Avatar';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {blue} from '@mui/material/colors';
import {Fonts} from 'shared/constants/AppEnums';
import {EmailOutlined} from '@mui/icons-material';

const GridItemDetail = ({contact}) => {
  return (
    <>
      <Box
        sx={{
          mb: {xs: 3, lg: 4, xl: 5},
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {contact.Avatar ? (
          <Avatar
            sx={{
              width: 46,
              height: 46,
              backgroundColor: blue[500],
            }}
            src={contact.Avatar}
          />
        ) : (
          <Avatar
            sx={{
              width: 46,
              height: 46,
              backgroundColor: blue[500],
            }}
          >
            {contact.Name[0].toUpperCase()}
          </Avatar>
        )}
        <Box
          sx={{
            ml: 4,
            width: 'calc(100% - 65px)',
          }}
        >
          <Box
            component='p'
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 14,
            }}
          >
            {contact.UserID}
          </Box>
          <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {contact.Name}
          </Box>

          <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {contact.Role}
          </Box>
          {/* <Box
            component='p'
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {contact.Status}
          </Box> */}
        </Box>
      </Box>

      <Box
        sx={{
          pt: 2,
          fontSize: 13,
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            py: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <EmailOutlined
            sx={{
              fontSize: 20,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
            component='p'
          >
            {contact.Email}
          </Box>
        </Box>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PhoneOutlinedIcon
            sx={{
              fontSize: 20,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
            component='p'
          >
            {contact.Mobilenumber}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GridItemDetail;

GridItemDetail.propTypes = {
  contact: PropTypes.object.isRequired,
};
