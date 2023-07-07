import React from 'react';
import { AppCard } from '@crema';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MediaSlider from './MediaSlider';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBasicArrow = ({ }) => {
  const slideBasicArrow = [
    {

      image: '/assets/images/safeslide/KMP2-scaled.jpg',
      title: 'KMP2-scaled'

    },
    {

      image: '/assets/images/safeslide/KMP2-scaled.jpg',
      title: 'ghjgfghkj'
    },
    {

      image: '/assets/images/safeslide/KMP2-scaled.jpg',
      title: 'ghjgfghkj'
    },
  ]
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicArrow.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                maxHeight: { xs: 260, md: 320 },
                minHeight: { xs: 250, md: 310 },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  '& img': {
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                  },
                }}
              >
                <img src={slide.image} alt={slide.title} />
              </Box>
            </Box>
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicArrow;

SlideBasicArrow.propTypes = {
  slideBasicArrow: PropTypes.array,
};
