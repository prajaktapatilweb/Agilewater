import React from 'react';
import Box from '@mui/material/Box';
import {Button, Container, Hidden, Link} from '@mui/material';
import {useLayoutContext} from '../../../../utility/AppContextProvider/LayoutContextProvider';
import Typography from '@mui/material/Typography';
import FooterWrapper from './FooterWrapper';
import CallBack from 'modules/commanmodules/CallBack';

const AppFixedFooter = () => {
  const {footer, footerType} = useLayoutContext();

  return (
    <>
      {footer && footerType === 'fixed' ? (
        <FooterWrapper className='footer fixed-footer'>
          <div className='footerContainer'>
            <Button color='primary'>Request a Call Back </Button>
            <Hidden mdDown>
              <Typography>
                <CallBack />
              </Typography>
            </Hidden>

            <Box sx={{ml: 'auto'}}>
              {/* <Button color='primary'>Request a Call Back </Button> */}
            </Box>
          </div>
        </FooterWrapper>
      ) : null}
    </>
  );
};

export default AppFixedFooter;
