import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import ATFinfo from './ATFinfo';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';
import LabTabs from 'modules/commanmodules/LabTabs';
import ATFaccord from './ATFaccord';

export default function ICPATF() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/icplogo/ICP-ATF.png'
        heading='ICP Agile Team Facilitation Certification'
        list1={[
          '2 to 3 Days of Classroom Training',
          '100% Assured Results',
          'ICP-ATF Certification (lifetime validity)',
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
                { label: 'Overview', panelData: <ATFinfo /> },
                { label: 'FAQ', panelData: <ATFaccord /> },
                { label: 'Testimonials', panelData: 'Item ewe' },
                { label: 'FreeCourses', panelData: 'Item ewe' }
              ]} />

            </AppCard>
            <Discussion></Discussion>
          </Grid>
          <Grid item xs={12} md={4}>
            <FreeCourseSlider images={freecourseList}></FreeCourseSlider>
            <RelatedCourses data={safeadvList} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
