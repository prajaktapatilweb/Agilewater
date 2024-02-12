import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MediaSlider from './MediaSlider';
import SlideItem from './SlideItem';
import { AppCard } from '@crema';
import { Card } from '@mui/material';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBasicThree1 = ({ data }) => {
  return (
    <Card style={{ padding: 5 }}>
      <MediaSlider>
        <Slider {...settings}>
          {data.map((slide, index) => (
            <SlideItem key={index} slide={slide} />
          ))}
        </Slider>
      </MediaSlider>
    </Card>
  );
};

export default SlideBasicThree1;

SlideBasicThree1.propTypes = {
  slideBasicThree: PropTypes.array,
};
