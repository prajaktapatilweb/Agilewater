import React from 'react';
import { Box, Typography } from '@mui/material';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMail, FiPhone } from 'react-icons/fi';
import AddressWrapper from './AddressWrapper';

const Address = () => {
  return (
    <Box sx={{ position: 'relative', ml: { lg: 5 } }}>
      <AddressWrapper>
        <Box className='avatar-icon'>
          <HiOutlineLocationMarker />
        </Box>
        <Typography>

          <b>USA Office</b><br></br>
          32957 Norwalk Street, Union City, CA 94587,<br></br>
          +1 (323)991-3839<br></br>
          Support@AgileWaters.com
        </Typography>&nbsp;&nbsp;&nbsp;
        <Typography>
          <b>India Office</b><br></br>
          Office No.111, Vision 9 Mall, 1st floor.<br></br>
          Kunal Icon Rd, Pimple Saudagar, PUNE, Maharashtra<br></br>
          PIN : 411027
        </Typography>
      </AddressWrapper>
      <AddressWrapper>
        <Box className='avatar-icon'>
          <FiPhone />
        </Box>
        <Typography>91 9421809846,<br></br>
          +91 9405045060</Typography>
      </AddressWrapper>
      <AddressWrapper>
        <Box className='avatar-icon'>
          <FiMail />
        </Box>
        <Typography>Support@AgileWaters.com</Typography>
      </AddressWrapper>
    </Box>
  );

};

export default Address;
