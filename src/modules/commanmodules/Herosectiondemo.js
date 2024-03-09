import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AppBar, Box, Card, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';
import VideoMain from './VideoMain';

export default function Herosectiondemo({ image1, heading, list1 }) {
  return (
    <div>
      <Grid
        className='section section-lg section-shaped'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
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
          <Grid
            container
            spacing={1}
            sx={{ position: 'relative', zIndex: 1 }}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} sm={12} md={8}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                >
                  <Image
                    alt='Safelogo'
                    src={image1}
                    height={80}
                    width={80}
                    // layout='responsive'
                    objectFit='contain'
                    className='pngback'
                  ></Image>

                  <Typography
                    variant='h1'
                    mx={{ xs: 1, md: 1, lg: 1, xl: 3 }}
                    fontSize={{ md: 20, lg: 24, xl: 28 }}
                    sx={{
                      fontWeight: Fonts.BOLD,
                      color: 'wheat',
                    }}
                  >
                    {heading}
                  </Typography>
                </Box>

                <List sx={{ color: 'white', mt: 3, pl: 3 }}>
                  {list1.map((item, i) => (
                    <ListItem key={i} alignItems='flex-start'>
                      <KeyboardDoubleArrowRightIcon
                        sx={{ fontSize: 18, mr: 3 }}
                      ></KeyboardDoubleArrowRightIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '18px', mt: -2 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ p: { xs: 3, sm: 15, md: 0 } }}>
                <VideoMain
                  links='https://www.youtube.com/watch?v=-M-R3Lc-V74'
                  videoPromo={'sd'}
                ></VideoMain>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

Herosectiondemo.propTypes = {
  image1: PropTypes.string,
  heading: PropTypes.string,
  list1: PropTypes.array,
};
