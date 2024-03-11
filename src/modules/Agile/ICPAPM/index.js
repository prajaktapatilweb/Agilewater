import React from 'react';
import { Container, Grid } from '@mui/material';
import { AppCard } from '@crema';
import APMinfo from './APMinfo';
import Atscaledownload from 'modules/ScrumAtScale/Atscaledownload';
import FreeCourseSlider from 'modules/commanmodules/FreeCourseSlider';
import { freecourseList } from 'modules/Constant/FreeCourseConst';
import RelatedCourses from 'modules/commanmodules/RelatedCourses';
import { safeadvList } from 'modules/Constant/Relatecoursedata';
import Discussion from 'modules/Discussion';
import Herosectiondemo from 'modules/commanmodules/Herosectiondemo';

export default function ICPAPM() {
  return (
    <div>
      <Herosectiondemo
        image1='/assets/images/courselogo/icplogo/ICP-APM.webp'
        heading='Agile Project and Delivery Management Classroom / Online Training'
        list1={[
          '2 Days of Classroom / Online Training',
          '100% Assured Results',
          'ICP-APM Certification',
          'Explore beyond the limitations of a single agile framework',
        ]}
        videosrc='https://www.youtube.com/watch?v=4kTqNhxSHcM'
      />

      <Container sx={{ maxWidth: { xl: 1450 }, marginTop: 10 }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={8}>
            <AppCard sxStyle={{ p: 2 }}>
              <APMinfo />
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
