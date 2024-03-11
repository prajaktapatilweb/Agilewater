import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import Leadershipinfo from './Leadershipinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import Leaderaccord from './Leaderaccord';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function AgileLeadership() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/AgileLeadershipJourney.png'
        heading='Agile Leadership Journey™'
        list1={[
          'Agile Leadership Journey™ develops more creative, adaptive and resilient leaders',
          'Our leadership training programs provide leaders tools to understand and shape their organization or team-based culture for agility and change.',
          'Rather than teaching agile methods to leaders, we teach leadership that fosters more agile ways of working.',
        ]}
        videosrc='https://www.youtube.com/watch?v=4kTqNhxSHcM'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <Leadershipinfo /> },
                { label: 'FAQ', panelData: <Leaderaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Atscaledownload />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
