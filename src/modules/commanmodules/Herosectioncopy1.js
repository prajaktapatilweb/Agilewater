import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';

export default function Herosectioncopy1({ heading, image1, }) {
  return (
    <div>
      <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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
        <Container sx={{ maxWidth: { xl: 1400 } }}>

          <Grid container sx={{ position: 'relative', zIndex: 1 }} direction="row"
            justifyContent="space-evenly"
            alignItems="center">

            <Grid item xs={12} sm={6} md={8} order={2}>

              <Image
                alt='Safelogo'
                src={image1}
                height={330}
                width={400}

              ></Image>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant='h1' sx={{ color: 'white' }}>{heading}</Typography>
              <br></br>

              <Button variant='contained'>Free Courses <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon> </Button>

              {/* <List sx={{ color: 'white', }}>
                  {list1.map((item, i) => (
                    <ListItem key={i} alignItems='flex-start'>
                      <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '18px', mt: -1 }}
                      />
                    </ListItem>
                  ))}
                </List> */}

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
