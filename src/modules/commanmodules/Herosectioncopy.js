import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Container } from '@mui/material';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';
import VideoMain from './VideoMain';
import SlideBasicArrow from './SlideBasicArrow';

export default function Herosectioncopy({ datalist, heading, list1 }) {
  return (
    <div>
      {/* <Grid className="section section-lg section-shaped " style={{ backgroundImage: "linear-gradient(90deg, #05445e 35%, #189ab4 90%)", position: "relative" }}> */}
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
          <Box
            component='h1'
            sx={{
              fontWeight: Fonts.BOLD,
              color: 'wheat',
              position: 'relative',
              zIndex: 1,

              // fontSize: 16,
            }}
            mt={{ xs: 9, md: 0 }}
            mb={{ xs: 3, md: 5 }}
          >
            {heading}
          </Box>

          <Grid
            container
            spacing={3}
            sx={{ position: 'relative', zIndex: 1 }}
            direction='row'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box px={{ xs: 10, sm: 0, md: 5 }} mx={{ xs: 10, sm: 0, md: 5 }}>
                <SlideBasicArrow data={datalist}></SlideBasicArrow>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 5 }}>
                <List sx={{ color: 'white' }}>
                  {list1.map((item, i) => (
                    <ListItem key={i} alignItems='flex-start'>
                      <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: '18px', mt: -1 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <VideoMain
                links='https://www.youtube.com/watch?v=-M-R3Lc-V74'
                videoPromo={'sd'}
              ></VideoMain>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

Herosectioncopy.propTypes = {
  image1: PropTypes.string,
  heading: PropTypes.string,
  list1: PropTypes.array,
};
