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
      <section style={{ background: "white" }}>
        <Container sx={{ maxWidth: 1500, paddingTop: 15 }}>
          <Heading data={headList7}></Heading>
          <Card sx={{ p: 5, mt: 5, border: '1px solid lightgrey' }}>

            <LabTabs data={[
              { label: 'Overview', panelData: <CertScruminfo /> },
              { label: 'FAQ', panelData: <CertScrumaccord /> },
              { label: 'ScrumQuiz', panelData: 'Item ewe' },
              { label: 'FreeCourses', panelData: 'Item ewe' }
            ]} />
          </Card>
        </Container>
      </section>

      <Registerform></Registerform>
      <Container sx={{ maxWidth: 1500, marginTop: 10, background: 'white' }}>
        {/* <Changingtabs /> */}
        <CoachCoursecard />
        testimonials
        clients company

        {/* <Hero /> */}

      </Container>
    </div>
  );
}
