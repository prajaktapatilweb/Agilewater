import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Herosectioncopy1({ heading, image1, para, btn }) {
  return (
    <div>
      <Grid className='section section-lg section-shaped'>
        <div className='shape shape-style-u1 shape-dark'>
          <span className='span-150' />
          <span className='span-50' />
          <span className='span-50' />
          <span className='span-75' />
          <span className='span-200' />
          <span className='span-75' />
          <span className='span-50' />
          <span className='span-100' />
          <span className='span-50' />
          <span className='span-100' />
        </div>
        <Container sx={{ maxWidth: { xl: 1450 } }}>

          <Grid container sx={{ position: 'relative', zIndex: 1, justifyContent: 'center', alignItems: 'center' }} spacing={0}>

            <Grid item xs={12} sm={6} md={4} order={2}>

              <Image
                alt='Safelogo'
                src={image1}
                height={330}
                width={400}
                layout='responsive'
                objectFit='contain'

              ></Image>

            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Typography variant='h1' sx={{ color: 'wheat' }}>{heading}</Typography>
              <br></br>
              <Typography variant='body1' sx={{ color: 'white' }}>
                {para}
              </Typography>
              <br></br>
              {btn}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

Herosectioncopy1.propTypes = {
  image1: PropTypes.string,
  heading: PropTypes.string,
  list1: PropTypes.array,
};
