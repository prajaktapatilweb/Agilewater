import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MediaSlider from './MediaSlider';
import SlideItem from './SlideItem';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';


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
    <motion.div

      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}

      transition={{
        delay: 0.2,
        x: { type: 'spring', stiffness: 60 },
        opacity: { duration: 0.6 },
        ease: "easeIn",
        duration: 1
      }}
    >
      <Card style={{ padding: 5 }}>
        <MediaSlider>
          <Slider {...settings}>
            {data.map((slide, index) => (
              <SlideItem key={index} slide={slide} />
            ))}
          </Slider>
        </MediaSlider>
      </Card>
    </motion.div>

  );
};

export default SlideBasicThree1;

SlideBasicThree1.propTypes = {
  slideBasicThree: PropTypes.array,
};
