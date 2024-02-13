import React from 'react';
import { alpha, Box, Button, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Fonts } from 'shared/constants/AppEnums';
import Image from 'next/image';
import { useState } from "react";
import { motion } from 'framer-motion';


const SlideItem = ({ slide }) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '100vh', sm: '85vh' },
        overflow: 'hidden',
        // border: '2px #333 solid'

        // height: '68vh',
      }}
    >

      <div id="imageContainer">
        <Image
          src={slide.image}
          height={100}
          width={100}
          layout='fill'
          objectFit='cover'
          alt={slide.title}

          animation='kenburns 20s infinite'

        />
        {/* <img src={slide.image} /> */}
      </div>

      {/* <Image
            src={slide.image}
            height={100}
            width={100}
            layout='fill'
            objectFit='cover'
            alt={slide.title}

            animation='kenburns 20s infinite'

          /> */}



      <Box
        sx={{
          // py: 3,
          // px: 4,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          backgroundImage:
            'linear-gradient(to right,	rgba(62,43,206,0.8) 30%, rgba(45,211,170,0.7) 100%, rgba(45,211,170,0.5) 100%, rgba(45,211,170,0.8) 100%)',

          // backgroundColor: (theme) => alpha(theme.palette.common.black, 0.45),
          // borderBottomLeftRadius: '10px',
          // borderBottomRightRadius: '10px',
          color: (theme) => theme.palette.common.white,
          height: '100%',
          display: 'flex !important',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          {/* <Box sx={{ p: 5, mt: 25 }}> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mx={{ xs: 5, sm: 3, md: 0 }}>
              <Typography
                variant='h5'
                sx={{
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Lorem Ipsum is simply dummy
                {/* Providing Quality Dental Care Since 2007 */}
              </Typography>
              <Typography
                // component="h2"
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  mb: { xs: 3, sm: 3, lg: 5 },

                  letterSpacing: 1.5,
                  fontWeight: '900',
                  color: 'white',
                  lineHeight: 1.5,
                }}
                gutterBottom
              >
                Large educational programs
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  mb: { xs: 3, sm: 3, md: 10 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.5,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. <br></br>
                Lorem Ipsum has been
                {/* Providing Quality Dental Care Since 2007 */}
              </Typography>

              {/* <Button color="primary" size="large" variant="contained" sx={{ mb: { xs: 12, sm: 3, md: 0 }, mr: 4, fontSize: 17, backgroundImage: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%)", color: 'white' }}> */}
              <Grid container spacing={0}>
                <Grid item xs={12} md={3}>
                  <Button
                    color='primary'
                    size='large'
                    variant='contained'
                    sx={{
                      my: { xs: 5, sm: 3, md: 0 },

                      fontSize: 17,
                      backgroundColor: '#fff',
                      p: 4,
                      fontWeight: 'bold',

                      boxShadow:
                        'rgba(0, 0, 0, 0.17) 0px -13px 15px 0px inset, rgba(0, 0, 0, 0.5) 0px -6px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

                      color: '#3e2ecd',
                    }}
                  >
                    In Demand Course
                  </Button>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Button
                    color='primary'
                    size='large'
                    variant='contained'
                    sx={{
                      mb: { xs: 12, sm: 3, md: 0 },
                      fontSize: 17,
                      backgroundColor: '#fff',
                      color: '#3e2ecd',
                      p: 4,
                      fontWeight: 'bold',
                      boxShadow:
                        'rgba(0, 0, 0, 0.17) 0px -13px 15px 0px inset, rgba(0, 0, 0, 0.5) 0px -6px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                    }}
                    onClick={() =>
                      openInNewTab(
                        'https://www.youtube.com/@AgileWatersConsulting',
                      )
                    }
                  >
                    {/* ", */}
                    Watch Video
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Image src="/assets/images/heroback.jpg" height={100} width={100} layout='responsive' objectFit='cover' alt={slide.title} />
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </Box>


  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};
