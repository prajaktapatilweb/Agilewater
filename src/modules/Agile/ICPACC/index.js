import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import Accinfo from './Accinfo';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import ACCaccord from './ACCaccord';

export default function ICPACC() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/icplogo/ICP-ACC.webp'
        // /assets/images/Safe/SAFe-Agilist-Logo.png'
        heading='ICP ACC - Agile Coaching Certification'
        list1={[

          '3 Days of Classroom Training',
          '100% Assured Results',
          'ICP-ACC Certification (lifetime validity)',
          'Use Hard copy of the material',
          'Small Batch Size',

        ]}
        videosrc='https://www.youtube.com/watch?v=4kTqNhxSHcM'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard>
              <LabTabs data={[
                { label: 'Overview', panelData: <Accinfo /> },
                { label: 'FAQ', panelData: <ACCaccord /> },
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
