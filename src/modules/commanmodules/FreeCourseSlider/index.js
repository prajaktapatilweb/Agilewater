import React from 'react';
import AppCard from '@crema/core/AppCard';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { Link } from '@mui/material';
import { Fonts } from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';
import CourseSlider from './CourseSlider';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { freecertlink } from '../Pagelinks';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FreeCourseSlider = ({ images }) => {

  return (
    <AppCard contentStyle={{ padding: 0, }} sx={{ mt: 5 }}>
      <CourseSlider>
        <Slider {...settings}>
          {images.map((item, index) => (
            <Box key={index} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Image src={item.img} width={460} height={200} layout='responsive' alt={item.title} />
              <br></br>
              <Typography variant='h2'>{item.subtitle}</Typography>

            </Box>

          ))}
        </Slider>
      </CourseSlider>
      <Box
        sx={{
          px: 4,
          py: 5,

        }}
      >


        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Link href={freecertlink} sx={{ textDecoration: 'none' }}>
            <Box
              sx={{
                color: '#259BE0',
                backgroundColor: '#E7F4FC',
                padding: { xs: '3px 12px', xl: '3px 18px' },
                borderRadius: 30,
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                fontSize: 15,
                fontWeight: 'bold',
                mr: 1,
                '& img': {
                  mr: 1.25,
                },
              }}
            >

              <img
                src={'/assets/images/dashboard/academy/lessons.png'}
                alt='lessons'
              />
              Free Demo Course

            </Box>
          </Link>

        </Box>
      </Box>
    </AppCard>
  );
};

export default FreeCourseSlider;

FreeCourseSlider.propTypes = {
  course: PropTypes.object,
};
