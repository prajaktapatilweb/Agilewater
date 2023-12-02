import React from 'react';
import Countup from './Countup';
import { Box, Container } from '@mui/material';
import Hero from './Hero';
import Changingtabs from 'modules/commanmodules/Changingtabs';
import CoachCoursecard from './CoachCoursecard';
import MainHero from 'modules/commanmodules/MainHero';

export default function indexfile() {
  return (
    <div>
      <Box className='events1' alignItems='center' justifyContent='center'>
        {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
        <section
          className='section'

          style={{

            backgroundColor: 'rgba(0, 0, 0, 0.7)',



            // backgroundImage:
            //   'linear-gradient(to right, rgba(61,51,204,0.9), rgba(154,219,206,0.9)',
          }}
        >
          <MainHero />
        </section>
      </Box>
      <Container sx={{ maxWidth: 1500, marginTop: 10 }}>
        <CoachCoursecard />
        <Changingtabs />
        {/* <Hero /> */}
        <Countup />
      </Container>
    </div>
  );
}
