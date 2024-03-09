import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MediaSlider from './MediaSlider';
import SlideItem from './SlideItem';
import { AppCard } from '@crema';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBasicThree = ({ data }) => {
  return (
    // <AppCard sxStyle={{ height: '100%' }}>
    <MediaSlider>
      <Slider {...settings}>
        {data.map((slide, index) => (
          <SlideItem key={index} slide={slide} />
        ))}
      </Slider>
    </MediaSlider>
    // </AppCard>
  );
};

export default SlideBasicThree;

SlideBasicThree.propTypes = {
  slideBasicThree: PropTypes.array,
};
