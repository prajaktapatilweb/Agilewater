import React from 'react';
import { alpha, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Fonts } from 'shared/constants/AppEnums';
import Image from 'next/image';

const SlideItem = ({ slide }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Image
          width={100}
          height={100}
          layout='responsive'
          objectFit='cover'
          src={slide.image}
          alt={slide.title}
        />
      </Box>
      <Box
        sx={{
          py: 3,
          px: 4,
          position: 'absolute',
          textAlign: 'center',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          backgroundColor: (theme) => alpha(theme.palette.common.black, 0.65),
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          color: (theme) => theme.palette.common.white,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: Fonts.SEMI_BOLD,
            mb: 3,
          }}
        >
          {slide.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};
