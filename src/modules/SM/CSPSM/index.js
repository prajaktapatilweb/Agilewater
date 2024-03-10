import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import CSPSMinfo from './CSPSMinfo';
import VideoMain from 'modules/commanmodules/VideoMain';
import Testcard from 'modules/commanmodules/TestCard';
import { testList2 } from 'modules/Constant/OthershortConst';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';

export default function CSPSM() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/smlogo/CSP-SM.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='Certified Scrum Professional ScrumMaster®'
        list1={[
          '2-day Advanced Level Course',
          'Scrum Master Core Competencies',
          'Service to the Product Owner',
          'Service to the Organization',
        ]}
        videosrc='https://www.youtube.com/watch?v=rB9dlx8V480&t=2s'
      />
      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <CSPSMinfo /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <Testcard data={testList2} />
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
