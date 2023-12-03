import React from 'react';
import Countup from './Countup';
import { Box, Card, Container } from '@mui/material';
import Hero from './Hero';
import Changingtabs from 'modules/commanmodules/Changingtabs';
import CoachCoursecard from './CoachCoursecard';
import MainHero from 'modules/commanmodules/MainHero';
import { AppCard } from '@crema';
import LabTabs from 'modules/commanmodules/LabTabs';
import CertScruminfo from 'modules/SM/CertScrumMaster/CertScruminfo';
import CertScrumaccord from 'modules/SM/CertScrumMaster/CertScrumaccord';
import Heading from 'modules/commanmodules/Heading';
import { headList7 } from 'modules/Constant/titlefile';
import Registerform from './Registerform';
import Testimonial from './Testimonial';
import Clients from 'modules/ContactUs/Clients';
import Certcourse from './Certcourse';

export default function indexfile() {
  return (
    <div>
      <Box className='events1' alignItems='center' justifyContent='center'>
        {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
        <section
          className='section'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',

            // backgroundImage:
            //   'linear-gradient(to right, rgba(61,51,204,0.9), rgba(154,219,206,0.9)',
          }}
        >
          <MainHero />
        </section>
      </Box>
      <Countup />
      <Certcourse></Certcourse>

      <Registerform></Registerform>
      <Container sx={{ maxWidth: 1500 }}>
        {/* <Changingtabs /> */}
        <CoachCoursecard />
      </Container>
      <Box container className='section' style={{ background: '#edeff3' }}>

        <Testimonial></Testimonial>

      </Box>


      <Clients />

      {/* <Hero /> */}


    </div>
  );
}
