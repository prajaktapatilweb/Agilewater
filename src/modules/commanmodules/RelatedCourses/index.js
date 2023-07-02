import React from 'react';
import AppCard from '@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Slider from 'react-slick';
import CourseItem from './CourseItem';
import PropTypes from 'prop-types';
import CourseSlider from './CourseSlider';
import { Container } from '@mui/material';

const RelatedCourses = () => {
  var relatedCourses = [
    {

      image: '/assets/images/AboutUs.png',
      title: "Our strong development team will never ",
      views: '1.8k',
    },
    {

      image: '/assets/images/AboutUs.png',
      title: "Our strong development team will never ",
      views: 'gfdhgd',
    },
    {

      image: '/assets/images/AboutUs.png',
      title: "Our strong development team will never ",
      views: 'gfdhgd',
    },

  ]
  const { messages } = useIntl();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <Container sx={{ maxWidth: { xl: 1400 } }}>
    <AppCard sxStyle={{ marginTop: 5, marginBottom: 5 }} title={'Related Courses'}>
      {/* <AppCard sxStyle={{ height: 1 }} title={messages['academy.relatedCourses']}> */}

      <CourseSlider>
        <Slider className='slideRoot' {...settings}>
          {relatedCourses.map((data, index) => (
            <CourseItem key={index} data={data} />
          ))}
        </Slider>
      </CourseSlider>
    </AppCard>
    // </Container>
  );
};

export default RelatedCourses;

RelatedCourses.propTypes = {
  relatedCourses: PropTypes.array,
};
