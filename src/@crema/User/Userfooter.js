import { Container, Link } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { Button } from '@mui/material';
import AppGridContainer from '@crema/core/AppGridContainer';
import {
  contactlink,

} from 'modules/commanmodules/Pagelinks';
import ScrollUp from 'modules/commanmodules/ScrollUp';

export default function Userfooter() {
  const contactno1 = ' +919421809846';
  const contactno2 = ' +919421809846';
  const contactno3 = ' +1(323)991-3839';

  return (
    <div>
      <ScrollUp></ScrollUp>
      <Grid container className='section' style={{ background: '#ffffff' }}>

        {/* backgroundImage: "linear-gradient(180deg,#9c27b0,#540162 )" */}
        <Container>
          <AppGridContainer>
            {/* <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ color: 'white' }}
              ml={{ xs: 10, sm: 0 }}
            >

            </Grid> */}
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              mb={{ xs: 5, sm: 5, md: 0 }}
              ml={{ xs: 10, sm: 0 }}
            >
              <Typography variant='h2' color='#20509e' gutterBottom>
                Corporate Office
              </Typography>
              <p style={{ color: '#75849a' }}>
                Office No.111, Vision 9 Mall,<br></br>
                1st floor, Kunal Icon Rd,<br></br>
                Pimple Saudagar, Pune, Maharashtra<br></br>
                PIN : 411027
              </p>
              <Typography variant='h2' color='#20509e' gutterBottom>
                USA Office
              </Typography>
              <p style={{ color: '#75849a' }}>
                32957 Norwalk Street, Union City, CA 94587
              </p>
              <Typography variant='h2' color='#20509e' gutterBottom>
                Other Offices
              </Typography>
              <p style={{ color: '#75849a' }}>
                Bengaluru, Mumbai, Noida,<br></br>
                Hyderabad, Kolkata, Mexico, UK<br></br>
              </p>
              <br></br>
              <Button
                variant='contained'
                sx={{
                  backgroundImage:
                    'linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)',
                }}
              >
                <Link
                  href={contactlink}
                  sx={{ color: 'white', textDecoration: 'none' }}
                >
                  {' '}
                  Contact Us
                </Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} ml={{ xs: 10, sm: 0 }}>
              <Typography variant='h2' color='#20509e' gutterBottom>
                Reach Us
              </Typography>
              <p style={{ color: '#75849a' }} gutterBottom>
                <Link
                  href={`tel:${contactno1}`}
                  target='_blank'
                  className='footermenu'
                  style={{ textDecoration: 'underline', display: 'inline-block' }}
                >
                  +91 9405045060
                </Link>
                <br></br>
                <Link
                  href={`tel:${contactno2}`}
                  target='_blank'
                  className='footermenu'
                  style={{ textDecoration: 'underline', display: 'inline-block' }}
                >
                  +91 9421809846
                </Link>
                <Typography variant='h2' color='#20509e' gutterBottom>
                  USA
                </Typography>
                <p style={{ color: '#75849a', }}>
                  <Link
                    href={`tel:${contactno3}`}
                    target='_blank'
                    className='footermenu'
                    style={{ textDecoration: 'underline', display: 'inline-block' }}
                  >
                    +1 (323)991-3839
                  </Link>
                </p>

                <Link
                  href={`mailto:${'Support@AgileWaters.com'}`}
                  target='_blank'
                  className='footermenu'
                  style={{ textDecoration: 'underline', display: 'inline-block' }}
                >
                  Support@AgileWaters.com
                </Link>
                <br></br>
                <Link href='https://linktr.ee/Agilewaters'>
                  AgileWaters-Linktree
                </Link>
              </p>

              <Typography variant='h2' color='#20509e' gutterBottom>
                Other Links
              </Typography>
              <Link
                href='https://www.apgionline.com/'
                sx={{ color: '#00a1ff', textDecoration: 'none' }}
              >
                {' '}
                APGI
              </Link>
              <br></br>
              <Link
                href='https://vijaywade.com/'
                sx={{ color: '#00a1ff', textDecoration: 'none' }}
              >
                {' '}
                VijayWade
              </Link>
              <br></br>
            </Grid>
            <Grid item xs={12} sm={6} md={3} ml={{ xs: 10, sm: 0 }}>
              <Typography variant='h2' color='#20509e' gutterBottom>
                Legal
              </Typography>
              <p style={{ color: '#75849a' }} gutterBottom>
                <Link href='/privacy-policy'> Privacy Policy</Link>
                <br></br>
                <Link href='/refund-policy'> Refund Policy</Link>
                <br></br>
              </p>
              <Typography variant='h2' color='#20509e' gutterBottom>
                {' '}
                Membership:
              </Typography>
              <Image
                alt='Safelogo'
                src='/assets/images/avatar/safe-Bronze-partnership.webp'
                height={80}
                width={80}
              />
              &nbsp;
              <Image
                alt='Safelogo'
                src='/assets/images/avatar/ICAgile.jpg'
                height={80}
                width={80}
              />
              <br></br>
              <Box sx={{ pl: 2, pt: 2 }}>
                <Image
                  alt='Safelogo'
                  src='/assets/images/avatar/EXIN-Logo.webp'
                  height='30%'
                  width='60%'
                />
              </Box>
            </Grid>
          </AppGridContainer>
        </Container>

        <hr />
      </Grid>
    </div>
  );
}
